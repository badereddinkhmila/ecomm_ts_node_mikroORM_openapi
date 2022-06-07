import { Entity, EntityRepositoryType, ManyToOne, Property } from '@mikro-orm/core';
import { CommonEntity } from './CommonEntity.entity';
import { CategoryRepository } from '../repository/CategoryRepository';
import User from './User.entity';

@Entity({ customRepository: () => CategoryRepository })
export default class Category extends CommonEntity {
  [EntityRepositoryType]: CategoryRepository;

  @Property()
  libelle: string;

  @Property()
  created_by: string;

  @Property()
  updated_by: string;

  @Property()
  description: string;

  @ManyToOne({ entity: () => User })
  creator: User;
}
