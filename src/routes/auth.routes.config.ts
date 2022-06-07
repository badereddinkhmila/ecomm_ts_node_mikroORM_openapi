import express from 'express';
import {body} from 'express-validator';
import { CommonRoutesConfig } from "../common/common.routes.config";
import authController from '../controller/auth.controller';
import authMiddleware from '../middelware/auth.middleware';
import bodyValidationMiddleware from '../middelware/body.validation.middleware';
import jwtMiddleware from '../middelware/jwt.middleware';

export class AuthRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configureRoutes(): express.Application {
        this.app.post(`/auth/signin`, [
            body('email').isEmail(),
            body('password').isString(),
            bodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.verifyUserPassword,
            authController.createJWT,
        ]);
        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            authController.createJWT,
        ]);
        return this.app;
    }
}