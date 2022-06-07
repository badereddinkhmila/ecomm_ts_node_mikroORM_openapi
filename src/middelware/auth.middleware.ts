import express from 'express';
import argon2 from 'argon2';
import usersService from '../services/users.service';
import User from '../entity/User.entity';

class AuthMiddleware {
  async verifyUserPassword(req: express.Request, res: express.Response, next: express.NextFunction) {
    const user: User = await usersService.getUserByEmailWithPassword(req.body.email);
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, req.body.password)) {
        req.body = {
          userId: user.id,
          email: user.email,
          authority: user.authority,
        };
        return next();
      }
    }

    // Giving the same message in both cases
    // helps protect against cracking attempts:
    res.status(400).send({ errors: ['Invalid email and/or password'] });
  }
}
export default new AuthMiddleware();
