import express from 'express';

// we import our newly created Order services
import ordersService from '../services/orders.service';

// we use debug with a custom context as described in Part 1
import debug from 'debug';

const log: debug.IDebugger = debug('app:orders-controller');

class OrdersController {
    
    async listOrders(req: express.Request, res: express.Response) {
        console.log('controller function hit route correctly')
        const Orders = await ordersService.list(100, 0);
        res.status(200).send(Orders);
    }

    async getOrderById(req: express.Request, res: express.Response) {
        const Order = await ordersService.readById(req.body.id);
        res.status(200).send(Order);
    }

    async createOrder(req: express.Request, res: express.Response) {
        const OrderId = await ordersService.create(req.body);
        res.status(201).send({ id: OrderId });
    }

    async patch(req: express.Request, res: express.Response) {
        log(await ordersService.patchById(req.body.id, req.body));
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        log(await ordersService.putById(req.body.id, req.body));
        res.status(204).send();
    }

    async removeOrder(req: express.Request, res: express.Response) {
        log(await ordersService.deleteById(req.body.id));
        res.status(204).send();
    }
}

export default new OrdersController();