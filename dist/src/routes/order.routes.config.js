"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const orders_controller_1 = __importDefault(require("../controller/orders.controller"));
const users_controller_1 = __importDefault(require("../controller/users.controller"));
const orders_middleware_1 = __importDefault(require("../middelware/orders.middleware"));
class OrdersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'OrdersRoutes');
    }
    configureRoutes() {
        this.app
            .route('/orders')
            .get(orders_controller_1.default.listOrders)
            .post(orders_middleware_1.default.validateRequiredOrderBodyFields, users_controller_1.default.createUser);
        this.app.param('orderId', orders_middleware_1.default.extractOrderId);
        this.app
            .route('/orders/:orderId')
            .all(orders_middleware_1.default.validateOrderExists)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put('/orders/:orderId', [
            orders_middleware_1.default.validateRequiredOrderBodyFields,
            orders_middleware_1.default.validateSameOrderBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch('/orders/:orderId', [
            orders_middleware_1.default.validatePatchProducts,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.OrdersRoutes = OrdersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvb3JkZXIucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5RUFBb0U7QUFDcEUsd0ZBQStEO0FBQy9ELHNGQUE2RDtBQUM3RCx3RkFBK0Q7QUFFL0QsTUFBYSxZQUFhLFNBQVEseUNBQWtCO0lBQ2hELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLFNBQVMsQ0FBQzthQUNoQixHQUFHLENBQUMsMkJBQWdCLENBQUMsVUFBVSxDQUFDO2FBQ2hDLElBQUksQ0FDRCwyQkFBZ0IsQ0FBQywrQkFBK0IsRUFDaEQsMEJBQWUsQ0FBQyxVQUFVLENBQzdCLENBQUM7UUFFTixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsMkJBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDekIsR0FBRyxDQUFDLDJCQUFnQixDQUFDLG1CQUFtQixDQUFDO2FBQ3pDLEdBQUcsQ0FBQywwQkFBZSxDQUFDLFdBQVcsQ0FBQzthQUNoQyxNQUFNLENBQUMsMEJBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QiwyQkFBZ0IsQ0FBQywrQkFBK0I7WUFDaEQsMkJBQWdCLENBQUMsaUNBQWlDO1lBQ2xELDBCQUFlLENBQUMsR0FBRztTQUN0QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQiwyQkFBZ0IsQ0FBQyxxQkFBcUI7WUFDdEMsMEJBQWUsQ0FBQyxLQUFLO1NBQ3hCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFsQ0Qsb0NBa0NDIn0=