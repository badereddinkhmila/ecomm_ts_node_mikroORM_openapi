import { Collection, Entity, EntityRepositoryType, OneToMany, Property, Unique } from '@mikro-orm/core';
import { IsEmail, IsNotEmpty } from 'class-validator';

import { UserRepository } from '../repository/UserRepository';
import Category from './Category.entity';
import { CommonEntity } from './CommonEntity.entity';
import Order from './Order.entity';
import Product from './Product.entity';
import { Roles } from './RolesEnum';

type Role = keyof typeof Roles;

@Entity({ customRepository: () => UserRepository })
export default class User extends CommonEntity {
  [EntityRepositoryType]?: UserRepository;

  @Property()
  @Unique()
  @IsNotEmpty()
  username: string;

  @Property()
  @Unique()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Property({ hidden: true })
  @IsNotEmpty()
  password: string;

  @Property({ nullable: true })
  firstname?: string;

  @Property({ nullable: true })
  lastname?: string;

  @Property()
  authority: Role;

  @Property({ nullable: true })
  address?: string;

  @OneToMany({ entity: () => Order, mappedBy: 'creator', orphanRemoval: true, nullable: true })
  orders? = new Collection<Order>(this);

  @OneToMany({ entity: () => Category, mappedBy: 'creator', orphanRemoval: true, nullable: true })
  categories? = new Collection<Category>(this);

  @OneToMany({ entity: () => Product, mappedBy: 'product_owner', orphanRemoval: true, nullable: true })
  products? = new Collection<Product>(this);
}
