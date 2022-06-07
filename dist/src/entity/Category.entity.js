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
const CommonEntity_entity_1 = require("./CommonEntity.entity");
const CategoryRepository_1 = require("../repository/CategoryRepository");
const User_entity_1 = __importDefault(require("./User.entity"));
let Category = class Category extends CommonEntity_entity_1.CommonEntity {
};
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Category.prototype, "libelle", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Category.prototype, "created_by", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Category.prototype, "updated_by", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, core_1.ManyToOne)({ entity: () => User_entity_1.default }),
    __metadata("design:type", User_entity_1.default)
], Category.prototype, "creator", void 0);
Category = __decorate([
    (0, core_1.Entity)({ customRepository: () => CategoryRepository_1.CategoryRepository })
], Category);
exports.default = Category;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnkuZW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2VudGl0eS9DYXRlZ29yeS5lbnRpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBb0Y7QUFDcEYsK0RBQXFEO0FBQ3JELHlFQUFzRTtBQUN0RSxnRUFBaUM7QUFHakMsSUFBcUIsUUFBUSxHQUE3QixNQUFxQixRQUFTLFNBQVEsa0NBQVk7Q0FpQmpELENBQUE7QUFiQztJQURDLElBQUEsZUFBUSxHQUFFOzt5Q0FDSztBQUdoQjtJQURDLElBQUEsZUFBUSxHQUFFOzs0Q0FDUTtBQUduQjtJQURDLElBQUEsZUFBUSxHQUFFOzs0Q0FDUTtBQUduQjtJQURDLElBQUEsZUFBUSxHQUFFOzs2Q0FDUztBQUdwQjtJQURDLElBQUEsZ0JBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxxQkFBSSxFQUFFLENBQUM7OEJBQ3pCLHFCQUFJO3lDQUFDO0FBaEJLLFFBQVE7SUFENUIsSUFBQSxhQUFNLEVBQUMsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyx1Q0FBa0IsRUFBRSxDQUFDO0dBQ2xDLFFBQVEsQ0FpQjVCO2tCQWpCb0IsUUFBUSJ9