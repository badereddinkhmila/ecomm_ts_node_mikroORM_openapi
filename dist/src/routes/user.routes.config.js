"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const express_validator_1 = require("express-validator");
const common_routes_config_1 = require("../common/common.routes.config");
const users_controller_1 = __importDefault(require("../controller/users.controller"));
const body_validation_middleware_1 = __importDefault(require("../middelware/body.validation.middleware"));
const users_middleware_1 = __importDefault(require("../middelware/users.middleware"));
const jwt_middleware_1 = __importDefault(require("../middelware/jwt.middleware"));
const permission_middleware_1 = __importDefault(require("../middelware/permission.middleware"));
const RolesEnum_1 = require("../entity/RolesEnum");
const getConnectedUser_middleware_1 = __importDefault(require("../middelware/getConnectedUser.middleware"));
class UsersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UsersRoutes');
    }
    configureRoutes() {
        this.app
            .route('/users')
            .get(jwt_middleware_1.default.validJWTNeeded, getConnectedUser_middleware_1.default.getMeByEmail, permission_middleware_1.default.permissionFlagRequired(RolesEnum_1.Roles.ROLE_SUPER_ADMIN), users_controller_1.default.listUsers)
            .post((0, express_validator_1.body)('email').isEmail(), (0, express_validator_1.body)('password').isLength({ min: 5 }).withMessage('Must include password (5+ characters)'), body_validation_middleware_1.default.verifyBodyFieldsErrors, users_middleware_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param('userId', users_middleware_1.default.extractUserId);
        this.app
            .route('/users/:userId')
            .all(users_middleware_1.default.validateUserExists, jwt_middleware_1.default.validJWTNeeded, permission_middleware_1.default.onlySameUserOrAdminCanDoThisAction)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put('/users/:userId', [
            permission_middleware_1.default.permissionFlagRequired(RolesEnum_1.Roles.ROLE_PROVIDER),
            users_middleware_1.default.validateRequiredPutUserBodyFields,
            users_middleware_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch('/users/:userId', [
            permission_middleware_1.default.permissionFlagRequired(RolesEnum_1.Roles.ROLE_PROVIDER),
            users_middleware_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy91c2VyLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBRXpDLHlFQUFvRTtBQUNwRSxzRkFBNkQ7QUFDN0QsMEdBQWdGO0FBQ2hGLHNGQUE2RDtBQUM3RCxrRkFBeUQ7QUFDekQsZ0dBQXVFO0FBQ3ZFLG1EQUE0QztBQUM1Qyw0R0FBbUY7QUFFbkYsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQ2pELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUNmLEdBQUcsQ0FDRix3QkFBYSxDQUFDLGNBQWMsRUFDNUIscUNBQTBCLENBQUMsWUFBWSxFQUN2QywrQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBSyxDQUFDLGdCQUFnQixDQUFDLEVBQ25FLDBCQUFlLENBQUMsU0FBUyxDQUMxQjthQUNBLElBQUksQ0FDSCxJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsdUNBQXVDLENBQUMsRUFDMUYsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLDBCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUMzQixDQUFDO1FBRUosSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDBCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUNGLDBCQUFlLENBQUMsa0JBQWtCLEVBQ2xDLHdCQUFhLENBQUMsY0FBYyxFQUM1QiwrQkFBb0IsQ0FBQyxrQ0FBa0MsQ0FDeEQ7YUFDQSxHQUFHLENBQUMsMEJBQWUsQ0FBQyxXQUFXLENBQUM7YUFDaEMsTUFBTSxDQUFDLDBCQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IsK0JBQW9CLENBQUMsc0JBQXNCLENBQUMsaUJBQUssQ0FBQyxhQUFhLENBQUM7WUFDaEUsMEJBQWUsQ0FBQyxpQ0FBaUM7WUFDakQsMEJBQWUsQ0FBQyxpQ0FBaUM7WUFDakQsMEJBQWUsQ0FBQyxHQUFHO1NBQ3BCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBQy9CLCtCQUFvQixDQUFDLHNCQUFzQixDQUFDLGlCQUFLLENBQUMsYUFBYSxDQUFDO1lBQ2hFLDBCQUFlLENBQUMsa0JBQWtCO1lBQ2xDLDBCQUFlLENBQUMsS0FBSztTQUN0QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBaERELGtDQWdEQyJ9