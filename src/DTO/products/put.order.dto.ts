import User from "../../entity/User.entity";

export interface PutOrderDto {
    id:string;
    status:string;
    creator:User;
}