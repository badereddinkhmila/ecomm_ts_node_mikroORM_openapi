"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const OrderRepository_1 = require("../repository/OrderRepository");
const CommonEntity_entity_1 = require("./CommonEntity.entity");
const Product_entity_1 = __importDefault(require("./Product.entity"));
const User_entity_1 = __importDefault(require("./User.entity"));
let Order = class Order extends CommonEntity_entity_1.CommonEntity {
    constructor() {
        super(...arguments);
        this.products = new core_1.Collection(this);
    }
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => User_entity_1.default }),
    __metadata("design:type", User_entity_1.default)
], Order.prototype, "creator", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => Product_entity_1.default),
    __metadata("design:type", core_1.Collection)
], Order.prototype, "products", void 0);
Order = __decorate([
    (0, core_1.Entity)({ customRepository: () => OrderRepository_1.OrderRepository })
], Order);
exports.default = Order;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXIuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9PcmRlci5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBNEc7QUFDNUcsbUVBQWdFO0FBQ2hFLCtEQUFxRDtBQUVyRCxzRUFBdUM7QUFDdkMsZ0VBQWlDO0FBS2pDLElBQXFCLEtBQUssR0FBMUIsTUFBcUIsS0FBTSxTQUFRLGtDQUFZO0lBQS9DOztRQVVFLGFBQVEsR0FBd0IsSUFBSSxpQkFBVSxDQUFVLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FBQSxDQUFBO0FBUEM7SUFEQyxJQUFBLGVBQVEsR0FBRTs7cUNBQ0k7QUFHZjtJQURDLElBQUEsZ0JBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxxQkFBSSxFQUFFLENBQUM7OEJBQ3pCLHFCQUFJO3NDQUFDO0FBR2Q7SUFEQyxJQUFBLGlCQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsd0JBQU8sQ0FBQzs4QkFDaEIsaUJBQVU7dUNBQTBDO0FBVjNDLEtBQUs7SUFEekIsSUFBQSxhQUFNLEVBQUMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxpQ0FBZSxFQUFFLENBQUM7R0FDL0IsS0FBSyxDQVd6QjtrQkFYb0IsS0FBSyJ9