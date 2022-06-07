"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class OrdersDao {
    constructor() {
        this.orders = [];
        log('Created new instance of OrdersDao');
    }
    addOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            this.orders.push(order);
            return order.id;
        });
    }
    getOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orders;
        });
    }
    getOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orders.find((order) => order.id === orderId);
        });
    }
    putOrderById(orderId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.orders.findIndex((obj) => obj.id === orderId);
            this.orders.splice(objIndex, 1, order);
            return `${order.id} updated via put`;
        });
    }
    patchOrderById(orderId, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.orders.findIndex((obj) => obj.id === orderId);
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
        });
    }
    removeOrderById(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.orders.findIndex((obj) => obj.id === orderId);
            this.orders.splice(objIndex, 1);
            return true;
        });
    }
    getOrderByCreator(creator) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.orders.findIndex((obj) => obj.creator === creator);
            let currentOrder = this.orders[objIndex];
            if (currentOrder) {
                return currentOrder;
            }
            else {
                return null;
            }
        });
    }
}
exports.default = new OrdersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9EQU8vb3JkZXJzLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQU0xQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUV4RCxNQUFNLFNBQVM7SUFHWDtRQUZBLFdBQU0sR0FBMEIsRUFBRSxDQUFDO1FBRy9CLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFSyxRQUFRLENBQUMsS0FBcUI7O1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFSyxZQUFZLENBQUMsT0FBZTs7WUFDOUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUM7UUFDN0UsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLE9BQWUsRUFBRSxLQUFrQjs7WUFDbEQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2xDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQzlDLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxrQkFBa0IsQ0FBQztRQUN6QyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsT0FBZSxFQUFFLEtBQW9COztZQUN0RCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FDbEMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FDOUMsQ0FBQztZQUNGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsTUFBTSxrQkFBa0IsR0FBRztnQkFDdkIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLFVBQVU7Z0JBQ1YsaUJBQWlCO2FBQ3BCLENBQUM7WUFDRixLQUFLLElBQUksS0FBSyxJQUFJLGtCQUFrQixFQUFFO2dCQUNsQyxJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7b0JBQ2hCLGFBQWE7b0JBQ2IsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdEM7YUFDSjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDOUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLFVBQVUsQ0FBQztRQUNqQyxDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsT0FBZTs7WUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2xDLENBQUMsR0FBbUIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQzlDLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsT0FBYTs7WUFDakMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ2xDLENBQUMsR0FBc0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQ3RELENBQUM7WUFDRixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLElBQUksWUFBWSxFQUFFO2dCQUNkLE9BQU8sWUFBWSxDQUFDO2FBQ3ZCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDO2FBQ2Y7UUFDTCxDQUFDO0tBQUE7Q0FFSjtBQUNELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMifQ==