import { CRUD } from "../common/crud.interface";
import ordersDao from "../DAO/orders.dao";
import { CreateOrderDto } from "../DTO/orders/create.order.dto";
import { PatchOrderDto } from "../DTO/orders/patch.order.dto";
import { PutOrderDto } from "../DTO/orders/put.order.dto";
import User from "../entity/User.entity";

class OrdersService implements CRUD {
    
    async create(resource: CreateOrderDto) {
        return ordersDao.addOrder(resource);
    }

    async deleteById(id: string) {
        return ordersDao.removeOrderById(id);
    }

    async list(limit: number, page: number) {
        return ordersDao.getOrders();
    }

    async patchById(id: string, resource: PatchOrderDto) {
        return ordersDao.patchOrderById(id, resource);
    }

    async readById(id: string) {
        return ordersDao.getOrderById(id);
    }

    async putById(id: string, resource: PutOrderDto) {
        return ordersDao.putOrderById(id, resource);
    }

    async getOrderByCreator(creator: User) {
        return ordersDao.getOrderByCreator(creator);
    }
    
}

export default new OrdersService();