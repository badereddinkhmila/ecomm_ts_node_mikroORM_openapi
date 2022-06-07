import { EntityRepository } from "@mikro-orm/mysql";
import Product from "../entity/Product.entity";

export class ProductRepository extends EntityRepository<Product>{

}