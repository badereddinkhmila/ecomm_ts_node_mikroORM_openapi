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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonEntity = void 0;
const core_1 = require("@mikro-orm/core");
const uuid_1 = require("uuid");
class CommonEntity {
    constructor() {
        this.id = (0, uuid_1.v4)();
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
__decorate([
    (0, core_1.PrimaryKey)({ type: 'uuid' }),
    __metadata("design:type", String)
], CommonEntity.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", Date)
], CommonEntity.prototype, "created_at", void 0);
__decorate([
    (0, core_1.Property)({ onUpdate: () => new Date() }),
    __metadata("design:type", Date)
], CommonEntity.prototype, "updated_at", void 0);
exports.CommonEntity = CommonEntity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uRW50aXR5LmVudGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbnRpdHkvQ29tbW9uRW50aXR5LmVudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBdUQ7QUFDdkQsK0JBQTBCO0FBRTFCLE1BQXNCLFlBQVk7SUFBbEM7UUFHUyxPQUFFLEdBQVcsSUFBQSxTQUFFLEdBQUUsQ0FBQztRQUdsQixlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUc5QixlQUFVLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0NBQUE7QUFSQztJQURDLElBQUEsaUJBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQzs7d0NBQ0o7QUFHekI7SUFEQyxJQUFBLGVBQVEsR0FBRTs4QkFDUSxJQUFJO2dEQUFjO0FBR3JDO0lBREMsSUFBQSxlQUFRLEVBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDOzhCQUN0QixJQUFJO2dEQUFjO0FBVHZDLG9DQVdDIn0=