import express from 'express';
import { CommonRoutesConfig } from '../common/common.routes.config';
import ordersController from '../controller/orders.controller';
import usersController from '../controller/users.controller';
import ordersMiddleware from '../middelware/orders.middleware';

export class OrdersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'OrdersRoutes');
    }

    configureRoutes() {

        this.app
            .route('/orders')
            .get(ordersController.listOrders)
            .post(
                ordersMiddleware.validateRequiredOrderBodyFields,
                usersController.createUser
            );

        this.app.param('orderId', ordersMiddleware.extractOrderId);
        this.app
            .route('/orders/:orderId')
            .all(ordersMiddleware.validateOrderExists)
            .get(usersController.getUserById)
            .delete(usersController.removeUser);

        this.app.put('/orders/:orderId', [
            ordersMiddleware.validateRequiredOrderBodyFields,
            ordersMiddleware.validateSameOrderBelongToSameUser,
            usersController.put,
        ]);

        this.app.patch('/orders/:orderId', [
            ordersMiddleware.validatePatchProducts,
            usersController.patch,
        ]);
        return this.app;
    }
}