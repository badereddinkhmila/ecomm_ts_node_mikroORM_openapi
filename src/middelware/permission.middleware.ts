import express from 'express';
import { Role, Roles } from '../entity/RolesEnum';
import debug from 'debug';

const log: debug.IDebugger = debug('app:common-permission-middleware');

class permissionMiddleware{
    permissionFlagRequired(requiredPermissionFlag: Role) {
    return (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
            try {
                const userPermissionFlags:Role = res.locals.jwt.authority
                if (!userPermissionFlags.localeCompare(requiredPermissionFlag)) next();
                else res.status(403).send();
            } catch (e) {
                log(e);
            }
        };
    }

    async onlySameUserOrAdminCanDoThisAction(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
    ) {
        const userPermissionFlags:Role = res.locals.jwt.authority;
        if (
            req.params &&
            req.params.userId &&
            req.params.userId === res.locals.jwt.userId
        ) next();
        else {
            if (!userPermissionFlags.localeCompare(Roles.ROLE_SUPER_ADMIN)) next();
            else res.status(403).send();
        }
    }

    async userCantChangePermission(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (
            'authority' in req.body &&
            req.body.authority !== res.locals.user.authority
        ) {
            res.status(400).send({
                errors: ['User cannot change permission flags'],
            });
        } else {
            next();
        }
    }
}
export default new permissionMiddleware();