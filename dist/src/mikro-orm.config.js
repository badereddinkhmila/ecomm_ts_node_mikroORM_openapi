"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const migrations_1 = require("@mikro-orm/migrations");
const sql_highlighter_1 = require("@mikro-orm/sql-highlighter");
exports.default = {
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
        generator: migrations_1.TSMigrationGenerator,
        highlighter: new sql_highlighter_1.SqlHighlighter(),
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlrcm8tb3JtLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9taWtyby1vcm0uY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esc0RBQTZEO0FBQzdELGdFQUE0RDtBQUU1RCxrQkFBZTtJQUNiLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsTUFBTSxFQUFFLGVBQWU7UUFDdkIsT0FBTyxFQUFFLHNCQUFzQjtRQUMvQixTQUFTLEVBQUUsc0JBQXNCO1FBQ2pDLGFBQWEsRUFBRSxJQUFJO1FBQ25CLFlBQVksRUFBRSxJQUFJO1FBQ2xCLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSxpQ0FBb0I7UUFDL0IsV0FBVyxFQUFFLElBQUksZ0NBQWMsRUFBRTtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsSUFBSSxFQUFFLFlBQVk7SUFDbEIsUUFBUSxFQUFFLGlCQUFpQjtJQUMzQixNQUFNLEVBQUUsU0FBUztJQUNqQixJQUFJLEVBQUUsV0FBVztJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLFFBQVEsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0lBQ2pDLFVBQVUsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0lBQ2xDLElBQUksRUFBRSxPQUFPO0NBQ3lCLENBQUMifQ==