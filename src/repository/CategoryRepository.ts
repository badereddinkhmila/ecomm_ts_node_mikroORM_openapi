import { EntityRepository } from '@mikro-orm/mysql';
import Category from "../entity/Category.entity";


export class CategoryRepository extends EntityRepository<Category>{

}