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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const winston_1 = __importDefault(require("winston"));
const express_winston_1 = __importDefault(require("express-winston"));
const http_1 = __importDefault(require("http"));
const debug_1 = __importDefault(require("debug"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const user_routes_config_1 = require("./routes/user.routes.config");
const order_routes_config_1 = require("./routes/order.routes.config");
const auth_routes_config_1 = require("./routes/auth.routes.config");
const api_doc_1 = require("./documentation/api.doc");
class Application {
    constructor() {
        this.app = (0, express_1.default)();
        this.server = http_1.default.createServer(this.app);
        this.port = process.env.SERVER_PORT || 5000;
        this.routes = [];
        this.debugLog = (0, debug_1.default)('app');
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            // setup express app here
            // middleware to parse all incoming requests as JSON 
            this.app.use(body_parser_1.default.json());
            // middleware to add extra security headers on requests
            this.app.use((0, helmet_1.default)());
            // middleware to allow cross-origin requests
            this.app.use((0, cors_1.default)());
            // preparing the expressWinston logging middleware configuration,
            // which will automatically log all HTTP requests handled by Express.js
            const loggerOptions = {
                transports: [new winston_1.default.transports.Console()],
                format: winston_1.default.format.combine(winston_1.default.format.json(), winston_1.default.format.prettyPrint(), winston_1.default.format.colorize({ all: true })),
            };
            if (!process.env.DEBUG) {
                loggerOptions.meta = false; // when not debugging, log requests as one-liners
                if (typeof global.it === 'function') {
                    loggerOptions.level = 'http'; // for non-debug test runs, squelch entirely
                }
            }
            // initialize the logger with the above configuration
            this.app.use(express_winston_1.default.logger(loggerOptions));
            // adding the UserRoutes to our array,
            // after sending the Express.js application object to have the routes added to our app!
            this.routes.push(new user_routes_config_1.UsersRoutes(this.app), new order_routes_config_1.OrdersRoutes(this.app), new auth_routes_config_1.AuthRoutes(this.app));
            try {
                const runningMessage = `🚀 http://localhost:${this.port}/`;
                this.app.get('/', (req, res) => {
                    res.status(200).send(runningMessage);
                });
                // start express server
                this.server.listen(this.port, () => {
                    this.routes.forEach((route) => {
                        this.debugLog(`Routes configured for ${route.getName()}`);
                    });
                    // our only exception to avoiding console.log(), because we
                    // always want to know when the server is done starting up
                    console.log(runningMessage);
                });
                this.app.use('/api/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(api_doc_1.apiDocumentation));
                this.app.use((req, res) => res.status(404).json({ message: 'No route found' }));
            }
            catch (error) {
                console.error('📌 Could not start server', error);
            }
        });
    }
}
exports.default = Application;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwbGljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBOEI7QUFDOUIsOERBQXFDO0FBQ3JDLGdEQUF3QjtBQUN4QixvREFBNEI7QUFDNUIsc0RBQThCO0FBQzlCLHNFQUE2QztBQUM3QyxnREFBd0I7QUFDeEIsa0RBQTBCO0FBQzFCLDRFQUEyQztBQUUzQyxvRUFBMEQ7QUFFMUQsc0VBQTREO0FBQzVELG9FQUF5RDtBQUN6RCxxREFBMkQ7QUFFM0QsTUFBcUIsV0FBVztJQUFoQztRQUVTLFFBQUcsR0FBd0IsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFDckMsV0FBTSxHQUFnQixjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxTQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDO1FBQ3ZDLFdBQU0sR0FBOEIsRUFBRSxDQUFDO1FBQ3ZDLGFBQVEsR0FBb0IsSUFBQSxlQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFHekMsU0FBSSxHQUFHLEdBQXdCLEVBQUU7WUFDdEMseUJBQXlCO1lBQ3pCLHFEQUFxRDtZQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFaEMsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sR0FBRSxDQUFDLENBQUM7WUFFdkIsNENBQTRDO1lBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztZQUVyQixpRUFBaUU7WUFDakUsdUVBQXVFO1lBQ3ZFLE1BQU0sYUFBYSxHQUFpQztnQkFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxpQkFBTyxD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