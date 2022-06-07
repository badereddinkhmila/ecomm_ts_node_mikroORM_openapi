import express from 'express';
import { body } from 'express-validator';

import { CommonRoutesConfig } from '../common/common.routes.config';
import usersController from '../controller/users.controller';
import bodyValidationMiddleware from '../middelware/body.validation.middleware';
import usersMiddleware from '../middelware/users.middleware';
import jwtMiddleware from '../middelware/jwt.middleware';
import permissionMiddleware from '../middelware/permission.middleware';
import { Roles } from '../entity/RolesEnum';
import getConnectedUserMiddleware from '../middelware/getConnectedUser.middleware';

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes');
  }

  configureRoutes() {
    this.app
      .route('/users')
      .get(
        jwtMiddleware.validJWTNeeded,
        getConnectedUserMiddleware.getMeByEmail,
        permissionMiddleware.permissionFlagRequired(Roles.ROLE_SUPER_ADMIN),
        usersController.listUsers
      )
      .post(
        body('email').isEmail(),
        body('password').isLength({ min: 5 }).withMessage('Must include password (5+ characters)'),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        usersMiddleware.validateSameEmailDoesntExist,
        usersController.createUser
      );

    this.app.param('userId', usersMiddleware.extractUserId);
    this.app
      .route('/users/:userId')
      .all(
        usersMiddleware.validateUserExists,
        jwtMiddleware.validJWTNeeded,
        permissionMiddleware.onlySameUserOrAdminCanDoThisAction
      )
      .get(usersController.getUserById)
      .delete(usersController.removeUser);

    this.app.put('/users/:userId', [
      permissionMiddleware.permissionFlagRequired(Roles.ROLE_PROVIDER),
      usersMiddleware.validateRequiredPutUserBodyFields,
      usersMiddleware.validateSameEmailBelongToSameUser,
      usersController.put,
    ]);

    this.app.patch('/users/:userId', [
      permissionMiddleware.permissionFlagRequired(Roles.ROLE_PROVIDER),
      usersMiddleware.validatePatchEmail,
      usersController.patch,
    ]);

    return this.app;
  }
}
