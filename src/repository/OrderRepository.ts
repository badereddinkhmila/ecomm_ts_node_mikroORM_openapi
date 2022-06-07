import { EntityRepository } from "@mikro-orm/mysql";
import Order from "../entity/Order.entity";


export class OrderRepository extends EntityRepository<Order>{

}