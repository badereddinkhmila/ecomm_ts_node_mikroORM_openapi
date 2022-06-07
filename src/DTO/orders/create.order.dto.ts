import User from "../../entity/User.entity";

export interface CreateOrderDto {
    id: string;
    status: string;
    creator: User;
}