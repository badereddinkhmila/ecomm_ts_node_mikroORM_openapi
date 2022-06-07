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
const RolesEnum_1 = require("../entity/RolesEnum");
const User_entity_1 = __importDefault(require("../entity/User.entity"));
const mikro_orm_service_1 = __importDefault(require("../services/mikro-orm.service"));
const log = (0, debug_1.default)('app:in-memory-dao');
class UsersDao {
    constructor() {
        this.allowedPatchFields = [
            'password',
            'firstname',
            'lastname',
            'authority',
        ];
        mikro_orm_service_1.default.getORM()
            .then(em => {
            this.userRepository = em.fork().getRepository(User_entity_1.default);
            this.em = em.fork();
        });
        log('Created new instance of UsersDao');
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = new User_entity_1.default();
            try {
                newUser = this.mapDtoToEntity(newUser, user, Object.keys(user));
                newUser.authority = RolesEnum_1.Roles.ROLE_CLIENT;
                yield this.userRepository.persistAndFlush(newUser);
                return newUser;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getUsers(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find({}, { limit: limit, offset: page * limit });
            return users;
        });
    }
    getUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ id: userId });
            return user;
        });
    }
    putUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentUser = yield this.userRepository.findOne({ id: userId });
            if (currentUser) {
                currentUser = this.mapDtoToEntity(currentUser, user, Object.keys(user));
                yield this.userRepository.flush();
                return `${currentUser.id} updated via put`;
            }
            return `unable to update ${currentUser.id} via put`;
        });
    }
    patchUserById(userId, user) {
        return __awaiter(this, void 0, void 0, function* () {
            let currentUser = yield this.userRepository.findOne({ id: userId });
            if (currentUser) {
                currentUser = this.mapDtoToEntity(currentUser, user, this.allowedPatchFields);
                yield this.userRepository.flush();
                return `patch success`;
            }
            return 'patch fail';
        });
    }
    removeUserById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ id: userId });
            if (user) {
                this.userRepository.remove(user);
                return true;
            }
            return false;
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUser = yield this.userRepository.findOne({ email: email });
            return currentUser;
        });
    }
    getUserByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userRepository.findOne({ email: email });
        });
    }
    mapDtoToEntity(entity, DTO, allowedFeilds) {
        for (let field of allowedFeilds) {
            if (field in DTO) {
                // @ts-ignore
                entity[field] = DTO[field];
            }
        }
        return entity;
    }
}
exports.default = new UsersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL0RBTy91c2Vycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFJMUIsbURBQTRDO0FBQzVDLHdFQUF5QztBQUV6QyxzRkFBNEQ7QUFFNUQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxRQUFRO0lBV1Y7UUFQUSx1QkFBa0IsR0FBRztZQUN6QixVQUFVO1lBQ1YsV0FBVztZQUNYLFVBQVU7WUFDVixXQUFXO1NBQ2QsQ0FBQztRQUdFLDJCQUFlLENBQUMsTUFBTSxFQUFFO2FBQ25CLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNQLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBSSxDQUFDLENBQUM7WUFDcEQsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUssT0FBTyxDQUFDLElBQW1COztZQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFJLEVBQUUsQ0FBQztZQUN6QixJQUFHO2dCQUNDLE9BQU8sR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2dCQUMzRCxPQUFPLENBQUMsU0FBUyxHQUFDLGlCQUFLLENBQUMsV0FBVyxDQUFDO2dCQUNwQyxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNuRCxPQUFPLE9BQU8sQ0FBQzthQUNsQjtZQUFBLE9BQU0sS0FBSyxFQUFDO2dC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