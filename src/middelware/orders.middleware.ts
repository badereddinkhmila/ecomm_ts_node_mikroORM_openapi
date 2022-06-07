import express from 'express';
import debug from 'debug';
import ordersService from '../services/orders.service';

const log: debug.IDebugger = debug('app:users-controller');

class OrdersMiddleware {
    async validateRequiredOrderBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.status) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields status and products`,
            });
        }
    }
    
    async validateSameOrderBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const order = await ordersService.getOrderByCreator(req.body.creator);
        if (order && order.creator.id === req.params.creator) {
            next();
        } else {
            res.status(400).send({ error: `Invalid email` });
        }
    }
    
    // Here we need to use an arrow function to bind `this` correctly
    validatePatchProducts = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (req.body.products) {
            log('Validating products', req.body.products);
            this.validateSameOrderBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };
    
    async validateOrderExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const order = await ordersService.readById(req.params.orderId);
        if (order) {
            next();
        } else {
            res.status(404).send({
                error: `Order ${req.params.orderId} not found`,
            });
        }
    }
    
    async extractOrderId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.userId;
        next();
    }
}

export default new OrdersMiddleware();