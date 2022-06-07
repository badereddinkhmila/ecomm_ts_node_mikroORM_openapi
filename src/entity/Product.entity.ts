import { Entity, EntityRepositoryType, ManyToOne, Property } from '@mikro-orm/core';
import { ProductRepository } from '../repository/ProductRepository';
import { CommonEntity } from './CommonEntity.entity';
import User from './User.entity';

@Entity({ customRepository: () => ProductRepository })
export default class Product extends CommonEntity {
  [EntityRepositoryType]?: ProductRepository;

  @Property()
  name_product: string;

  @Property()
  description_product: string;

  @Property()
  price_product: number;

  @Property()
  isAvailable: boolean;

  @Property()
  created_by: string;

  @Property()
  edited_by: string;

  @Property()
  discount_product: string;

  @Property()
  color_product: string;

  @ManyToOne({ entity: () => User })
  product_owner: User;
}
