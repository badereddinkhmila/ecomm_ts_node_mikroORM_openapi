import { Connection, IDatabaseDriver, MikroORM } from '@mikro-orm/core';
import debug from 'debug';
import ormConfig from '../mikro-orm.config';

const log: debug.IDebugger = debug('app:mikro-orm-service');

class MicroORMService {
    
    public orm: MikroORM<IDatabaseDriver<Connection>> | undefined;
    // private count = 0;

    connect = async (): Promise<void> => {
        try {
          this.orm = await MikroORM.init(ormConfig);
          const migrator = this.orm.getMigrator();
          const migrations = await migrator.getPendingMigrations();
          if (migrations && migrations.length > 0) {
            await migrator.up();
          }
          log('Connected to the database 🚀🚢🔌✔');
        } catch (error) {
          console.error('📌 Could not connect to the database', error);
        //   throw Error(error);
        }
      };
      
    constructor() {
        this.connect();
    }

    getORM = async () => {
        const orm = await MikroORM.init(ormConfig);
        return orm.em;
    }

    // connectWithRetry = () => {
    //     log('Attempting Msql8 DB connection (will retry if needed)');
    //     this.connect()
    //         .then(() => {
    //             log('Mysql8 DB is connected');
    //         })
    //         .catch((err) => {
    //             const retrySeconds = 5;
    //             log(
    //                 `Msql8 DB connection unsuccessful (will retry #${++this
    //                     .count} after ${retrySeconds} seconds):`,
    //                 err
    //             );
    //             setTimeout(this.connectWithRetry, retrySeconds * 1000);
    //         });
    // };

}
export default new MicroORMService();