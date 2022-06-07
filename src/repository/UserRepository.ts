import { EntityRepository } from "@mikro-orm/mysql";
import User from "../entity/User.entity";

export class UserRepository extends EntityRepository<User>{

}