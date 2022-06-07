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
const ProductRepository_1 = require("../repository/ProductRepository");
const CommonEntity_entity_1 = require("./CommonEntity.entity");
const User_entity_1 = __importDefault(require("./User.entity"));
let Product = class Product extends CommonEntity_entity_1.CommonEntity {
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "name_product", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "description_product", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Number)
], Product.prototype, "price_product", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Boolean)
], Product.prototype, "isAvailable", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "created_by", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "edited_by", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "discount_product", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Product.prototype, "color_product", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => User_entity_1.default }),
    __metadata("design:type", User_entity_1.default)
], Product.prototype, "product_owner", void 0);
Product = __decorate([
    (0, core_1.Entity)({ customRepository: () => ProductRepository_1.ProductRepository })
], Product);
exports.default = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5lbnRpdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW50aXR5L1Byb2R1Y3QuZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQW9GO0FBQ3BGLHVFQUFvRTtBQUNwRSwrREFBcUQ7QUFDckQsZ0VBQWlDO0FBR2pDLElBQXFCLE9BQU8sR0FBNUIsTUFBcUIsT0FBUSxTQUFRLGtDQUFZO0NBNkJoRCxDQUFBO0FBekJDO0lBREMsSUFBQSxlQUFRLEdBQUU7OzZDQUNVO0FBR3JCO0lBREMsSUFBQSxlQUFRLEdBQUU7O29EQUNpQjtBQUc1QjtJQURDLElBQUEsZUFBUSxHQUFFOzs4Q0FDVztBQUd0QjtJQURDLElBQUEsZUFBUSxHQUFFOzs0Q0FDVTtBQUdyQjtJQURDLElBQUEsZUFBUSxHQUFFOzsyQ0FDUTtBQUduQjtJQURDLElBQUEsZUFBUSxHQUFFOzswQ0FDTztBQUdsQjtJQURDLElBQUEsZUFBUSxHQUFFOztpREFDYztBQUd6QjtJQURDLElBQUEsZUFBUSxHQUFFOzs4Q0FDVztBQUd0QjtJQURDLElBQUEsZ0JBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxxQkFBSSxFQUFFLENBQUM7OEJBQ25CLHFCQUFJOzhDQUFDO0FBNUJELE9BQU87SUFEM0IsSUFBQSxhQUFNLEVBQUMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxxQ0FBaUIsRUFBRSxDQUFDO0dBQ2pDLE9BQU8sQ0E2QjNCO2tCQTdCb0IsT0FBTyJ9