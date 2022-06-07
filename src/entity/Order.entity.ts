import { Collection, Entity, EntityRepositoryType, ManyToMany, ManyToOne, Property } from '@mikro-orm/core';
import { OrderRepository } from '../repository/OrderRepository';
import { CommonEntity } from './CommonEntity.entity';
import { OrderStatus } from './OrderStatusEnum';
import Product from './Product.entity';
import User from './User.entity';

type Status = keyof typeof OrderStatus;

@Entity({ customRepository: () => OrderRepository })
export default class Order extends CommonEntity {
  [EntityRepositoryType]: OrderRepository;

  @Property()
  status: Status;

  @ManyToOne({ entity: () => User })
  creator: User;

  @ManyToMany(() => Product)
  products: Collection<Product> = new Collection<Product>(this);
}
