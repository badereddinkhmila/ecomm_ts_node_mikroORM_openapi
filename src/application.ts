import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from "helmet";
import winston from 'winston';
import expressWinston from 'express-winston';
import http from 'http';
import debug from 'debug';
import swaggerUi from 'swagger-ui-express';

import { UsersRoutes } from './routes/user.routes.config';
import { CommonRoutesConfig } from './common/common.routes.config';
import { OrdersRoutes } from './routes/order.routes.config';
import { AuthRoutes } from './routes/auth.routes.config';
import { apiDocumentation } from './documentation/api.doc';

export default class Application {

  public app: express.Application = express();
  public server: http.Server = http.createServer(this.app);
  public port = process.env.SERVER_PORT || 5000;
  public routes: Array<CommonRoutesConfig> = [];
  public debugLog: debug.IDebugger = debug('app');
  

  public init = async (): Promise<void> => {
    // setup express app here
    // middleware to parse all incoming requests as JSON 
    this.app.use(bodyParser.json());

    // middleware to add extra security headers on requests
    this.app.use(helmet());

    // middleware to allow cross-origin requests
    this.app.use(cors());

    // preparing the expressWinston logging middleware configuration,
    // which will automatically log all HTTP requests handled by Express.js
    const loggerOptions: expressWinston.LoggerOptions = {
        transports: [new winston.transports.Console()],
        format: winston.format.combine(
            winston.format.json(),
            winston.format.prettyPrint(),
            winston.format.colorize({ all: true })
        ),
    };
    
    if (!process.env.DEBUG) {
      loggerOptions.meta = false; // when not debugging, log requests as one-liners
      if (typeof global.it === 'function') {
        loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
      }
    }

    // initialize the logger with the above configuration
    this.app.use(expressWinston.logger(loggerOptions));

    // adding the UserRoutes to our array,
    // after sending the Express.js application object to have the routes added to our app!
    this.routes.push(new UsersRoutes(this.app),new OrdersRoutes(this.app),new AuthRoutes(this.app));

    try {
      const runningMessage = `🚀 http://localhost:${this.port}/` 

      this.app.get('/', (req: express.Request, res: express.Response) => {
          res.status(200).send(runningMessage)
      });
      
      // start express server
      this.server.listen(this.port, () => {
          this.routes.forEach((route: CommonRoutesConfig) => {
              this.debugLog(`Routes configured for ${route.getName()}`);
          });
          // our only exception to avoiding console.log(), because we
          // always want to know when the server is done starting up
          console.log(runningMessage);
      })
      this.app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
      this.app.use((req:express.Request, res:express.Response) => res.status(404).json({ message: 'No route found' }));
    } catch (error) {
      console.error('📌 Could not start server', error);
    }
  };
}