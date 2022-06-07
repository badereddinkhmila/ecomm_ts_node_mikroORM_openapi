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
const class_validator_1 = require("class-validator");
const UserRepository_1 = require("../repository/UserRepository");
const Category_entity_1 = __importDefault(require("./Category.entity"));
const CommonEntity_entity_1 = require("./CommonEntity.entity");
const Order_entity_1 = __importDefault(require("./Order.entity"));
const Product_entity_1 = __importDefault(require("./Product.entity"));
let User = class User extends CommonEntity_entity_1.CommonEntity {
    constructor() {
        super(...arguments);
        this.orders = new core_1.Collection(this);
        this.categories = new core_1.Collection(this);
        this.products = new core_1.Collection(this);
    }
};
__decorate([
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, core_1.Property)(),
    (0, core_1.Unique)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, core_1.Property)({ hidden: true }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "firstname", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "lastname", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], User.prototype, "authority", void 0);
__decorate([
    (0, core_1.Property)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, core_1.OneToMany)({ entity: () => Order_entity_1.default, mappedBy: 'creator', orphanRemoval: true, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "orders", void 0);
__decorate([
    (0, core_1.OneToMany)({ entity: () => Category_entity_1.default, mappedBy: 'creator', orphanRemoval: true, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "categories", void 0);
__decorate([
    (0, core_1.OneToMany)({ entity: () => Product_entity_1.default, mappedBy: 'product_owner', orphanRemoval: true, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "products", void 0);
User = __decorate([
    (0, core_1.Entity)({ customRepository: () => UserRepository_1.UserRepository })
], User);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXR5L1VzZXIuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXdHO0FBQ3hHLHFEQUFzRDtBQUV0RCxpRUFBOEQ7QUFDOUQsd0VBQXlDO0FBQ3pDLCtEQUFxRDtBQUNyRCxrRUFBbUM7QUFDbkMsc0VBQXVDO0FBTXZDLElBQXFCLElBQUksR0FBekIsTUFBcUIsSUFBSyxTQUFRLGtDQUFZO0lBQTlDOztRQStCRSxXQUFNLEdBQUksSUFBSSxpQkFBVSxDQUFRLElBQUksQ0FBQyxDQUFDO1FBR3RDLGVBQVUsR0FBSSxJQUFJLGlCQUFVLENBQVcsSUFBSSxDQUFDLENBQUM7UUFHN0MsYUFBUSxHQUFJLElBQUksaUJBQVUsQ0FBVSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQUEsQ0FBQTtBQWhDQztJQUhDLElBQUEsZUFBUSxHQUFFO0lBQ1YsSUFBQSxhQUFNLEdBQUU7SUFDUixJQUFBLDRCQUFVLEdBQUU7O3NDQUNJO0FBTWpCO0lBSkMsSUFBQSxlQUFRLEdBQUU7SUFDVixJQUFBLGFBQU0sR0FBRTtJQUNSLElBQUEseUJBQU8sR0FBRTtJQUNULElBQUEsNEJBQVUsR0FBRTs7bUNBQ0M7QUFJZDtJQUZDLElBQUEsZUFBUSxFQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzFCLElBQUEsNEJBQVUsR0FBRTs7c0NBQ0k7QUFHakI7SUFEQyxJQUFBLGVBQVEsRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7dUNBQ1Y7QUFHbkI7SUFEQyxJQUFBLGVBQVEsRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ1g7QUFHbEI7SUFEQyxJQUFBLGVBQVEsR0FBRTs7dUNBQ0s7QUFHaEI7SUFEQyxJQUFBLGVBQVEsRUFBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7cUNBQ1o7QUFHakI7SUFEQyxJQUFBLGdCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDdkQ7QUFHdEM7SUFEQyxJQUFBLGdCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMseUJBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt3Q0FDbkQ7QUFHN0M7SUFEQyxJQUFBLGdCQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsd0JBQU8sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDM0Q7QUFyQ3ZCLElBQUk7SUFEeEIsSUFBQSxhQUFNLEVBQUMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQywrQkFBYyxFQUFFLENBQUM7R0FDOUIsSUFBSSxDQXNDeEI7a0JBdENvQixJQUFJIn0=