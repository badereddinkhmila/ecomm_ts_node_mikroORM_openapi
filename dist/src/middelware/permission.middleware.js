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
const RolesEnum_1 = require("../entity/RolesEnum");
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:common-permission-middleware');
class permissionMiddleware {
    permissionFlagRequired(requiredPermissionFlag) {
        return (req, res, next) => {
            try {
                const userPermissionFlags = res.locals.jwt.authority;
                if (!userPermissionFlags.localeCompare(requiredPermissionFlag))
                    next();
                else
                    res.status(403).send();
            }
            catch (e) {
                log(e);
            }
        };
    }
    onlySameUserOrAdminCanDoThisAction(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const userPermissionFlags = res.locals.jwt.authority;
            if (req.params &&
                req.params.userId &&
                req.params.userId === res.locals.jwt.userId)
                next();
            else {
                if (!userPermissionFlags.localeCompare(RolesEnum_1.Roles.ROLE_SUPER_ADMIN))
                    next();
                else
                    res.status(403).send();
            }
        });
    }
    userCantChangePermission(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if ('authority' in req.body &&
                req.body.authority !== res.locals.user.authority) {
                res.status(400).send({
                    errors: ['User cannot change permission flags'],
                });
            }
            else {
                next();
            }
        });
    }
}
exports.default = new permissionMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL21pZGRlbHdhcmUvcGVybWlzc2lvbi5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQWtEO0FBQ2xELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUV2RSxNQUFNLG9CQUFvQjtJQUN0QixzQkFBc0IsQ0FBQyxzQkFBNEI7UUFDbkQsT0FBTyxDQUNILEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCLEVBQzVCLEVBQUU7WUFDSSxJQUFJO2dCQUNBLE1BQU0sbUJBQW1CLEdBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFBO2dCQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDO29CQUFFLElBQUksRUFBRSxDQUFDOztvQkFDbEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNWO1FBQ0wsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVLLGtDQUFrQyxDQUN4QyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFdEIsTUFBTSxtQkFBbUIsR0FBUSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDMUQsSUFDSSxHQUFHLENBQUMsTUFBTTtnQkFDVixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU07Z0JBQzdDLElBQUksRUFBRSxDQUFDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsaUJBQUssQ0FBQyxnQkFBZ0IsQ0FBQztvQkFBRSxJQUFJLEVBQUUsQ0FBQzs7b0JBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDL0I7UUFDTCxDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FDMUIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLElBQ0ksV0FBVyxJQUFJLEdBQUcsQ0FBQyxJQUFJO2dCQUN2QixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQ2xEO2dCQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixNQUFNLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztpQkFDbEQsQ0FBQyxDQUFDO2FBQ047aUJBQU07Z0JBQ0gsSUFBSSxFQUFFLENBQUM7YUFDVjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBQ0Qsa0JBQWUsSUFBSSxvQkFBb0IsRUFBRSxDQUFDIn0=