import express from 'express';
import usersService from '../services/users.service';

class getConnectedUserMiddleware {
  async getMeByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    const me = req.query.me;

    if (me) {
      const user = await usersService.getUserByEmail(res.locals.jwt.email);
      return res.status(200).send(user);
    } else {
      return next();
    }
  }
}
export default new getConnectedUserMiddleware();
