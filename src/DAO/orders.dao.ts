import debug from 'debug';
import { CreateOrderDto } from '../DTO/orders/create.order.dto';
import { PatchOrderDto } from '../DTO/orders/patch.order.dto';
import { PutOrderDto } from '../DTO/orders/put.order.dto';
import User from '../entity/User.entity';

const log: debug.IDebugger = debug('app:in-memory-dao');

class OrdersDao {
    orders: Array<CreateOrderDto> = [];

    constructor() {
        log('Created new instance of OrdersDao');
    }

    async addOrder(order: CreateOrderDto) {
        this.orders.push(order);
        return order.id;
    }

    async getOrders() {
        return this.orders;
    }
    
    async getOrderById(orderId: string) {
        return this.orders.find((order: { id: string }) => order.id === orderId);
    }

    async putOrderById(orderId: string, order: PutOrderDto) {
        const objIndex = this.orders.findIndex(
            (obj: { id: string }) => obj.id === orderId
        );
        this.orders.splice(objIndex, 1, order);
        return `${order.id} updated via put`;
    }
    
    async patchOrderById(orderId: string, order: PatchOrderDto) {
        const objIndex = this.orders.findIndex(
            (obj: { id: string }) => obj.id === orderId
        );
        let currentOrder = this.orders[objIndex];
        const allowedPatchFields = [
            'password',
            'firstName',
            'lastName',
            'permissionLevel',
        ];
        for (let field of allowedPatchFields) {
            if (field in order) {
                // @ts-ignore
                currentOrder[field] = order[field];
            }
        }
        this.orders.splice(objIndex, 1, currentOrder);
        return `${order.id} patched`;
    }

    async removeOrderById(orderId: string) {
        const objIndex = this.orders.findIndex(
            (obj: { id: string }) => obj.id === orderId
        );
        this.orders.splice(objIndex, 1);
        return true;
    }

    async getOrderByCreator(creator: User) {
        const objIndex = this.orders.findIndex(
            (obj: { creator: User }) => obj.creator === creator
        );
        let currentOrder = this.orders[objIndex];
        if (currentOrder) {
            return currentOrder;
        } else {
            return null;
        }
    }
    
}
export default new OrdersDao();
