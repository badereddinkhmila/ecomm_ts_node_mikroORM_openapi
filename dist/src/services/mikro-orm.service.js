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
const core_1 = require("@mikro-orm/core");
const debug_1 = __importDefault(require("debug"));
const mikro_orm_config_1 = __importDefault(require("../mikro-orm.config"));
const log = (0, debug_1.default)('app:mikro-orm-service');
class MicroORMService {
    constructor() {
        // private count = 0;
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this.orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
                const migrator = this.orm.getMigrator();
                const migrations = yield migrator.getPendingMigrations();
                if (migrations && migrations.length > 0) {
                    yield migrator.up();
                }
                log('Connected to the database 🚀🚢🔌✔');
            }
            catch (error) {
                console.error('📌 Could not connect to the database', error);
                //   throw Error(error);
            }
        });
        this.getORM = () => __awaiter(this, void 0, void 0, function* () {
            const orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
            return orm.em;
        });
        this.connect();
    }
}
exports.default = new MicroORMService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlrcm8tb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2VydmljZXMvbWlrcm8tb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBd0U7QUFDeEUsa0RBQTBCO0FBQzFCLDJFQUE0QztBQUU1QyxNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUU1RCxNQUFNLGVBQWU7SUFvQmpCO1FBakJBLHFCQUFxQjtRQUVyQixZQUFPLEdBQUcsR0FBd0IsRUFBRTtZQUNoQyxJQUFJO2dCQUNGLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxlQUFRLENBQUMsSUFBSSxDQUFDLDBCQUFTLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDeEMsTUFBTSxVQUFVLEdBQUcsTUFBTSxRQUFRLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDekQsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLE1BQU0sUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUNyQjtnQkFDRCxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQzthQUMxQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQy9ELHdCQUF3QjthQUN2QjtRQUNILENBQUMsQ0FBQSxDQUFDO1FBTUosV0FBTSxHQUFHLEdBQVMsRUFBRTtZQUNoQixNQUFNLEdBQUcsR0FBRyxNQUFNLGVBQVEsQ0FBQyxJQUFJLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDLENBQUEsQ0FBQTtRQU5HLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBd0JKO0FBQ0Qsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9