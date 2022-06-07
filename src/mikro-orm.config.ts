import { MikroORM} from '@mikro-orm/core';
import { TSMigrationGenerator } from '@mikro-orm/migrations';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';

export default {
  migrations: {
    path: 'dist/migration',
    pathTs: 'src/migration',
    pattern: /^[\w-]+\d+\.(js|ts)$/,
    tableName: 'mikro_orm_migrations',
    transactional: true,
    allOrNothing: true,
    glob: '!(*.d).{js,ts}',
    snapshot: true,
    emit: 'ts',
    generator: TSMigrationGenerator,
    highlighter: new SqlHighlighter(),
    debug: true,
  },
  user: 'badreddine',
  password: 'baderbadrouch15',
  dbName: 'node_db',
  host: 'localhost',
  port: 3306,
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/**/*.entity.ts'],
  type: 'mysql',
} as Parameters<typeof MikroORM.init>[0];