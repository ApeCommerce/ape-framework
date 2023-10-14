import fs from 'fs-extra';
import { Database } from './database';
import { getConfig } from '../config';

const config = getConfig();

export enum Module {
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

export const module = Object.values(Module).find((m) => m === config.dbModule);
if (!module) throw new Error(`DB: invalid module "${config.dbModule}"`);

if (module === Module.mysql) {
  if (!config.dbMysqlHost) throw new Error('DB: mysql host not provided');
  if (!config.dbMysqlPort) throw new Error('DB: mysql port not provided');
  if (!config.dbMysqlDatabase) throw new Error('DB: mysql database not provided');
} else if (module === Module.postgres) {
  if (!config.dbPostgresHost) throw new Error('DB: postgres host not provided');
  if (!config.dbPostgresPort) throw new Error('DB: postgres port not provided');
  if (!config.dbPostgresDatabase) throw new Error('DB: postgres database not provided');
} else if (module === Module.sqlite) {
  if (!config.dbSqliteFile) throw new Error('DB: sqlite file not provided');
}

const moduleConfig: { [module in Module]: Database.Config } = {
  memory: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:',
    },
    useNullAsDefault: true,
  },
  mysql: {
    client: 'mysql2',
    connection: {
      host: config.dbMysqlHost,
      port: config.dbMysqlPort,
      ...(config.dbMysqlUser ? { user: config.dbMysqlUser } : {}),
      ...(config.dbMysqlPassword ? { password: config.dbMysqlPassword } : {}),
      database: config.dbMysqlDatabase,
      ...(config.dbMysqlSsl ? {
        ssl: {
          ...(config.dbMysqlSslCa ? { ca: fs.readFileSync(config.dbMysqlSslCa).toString() } : {}),
          ...(config.dbMysqlSslCert ? { cert: fs.readFileSync(config.dbMysqlSslCert).toString() } : {}),
          ...(config.dbMysqlSslKey ? { key: fs.readFileSync(config.dbMysqlSslKey).toString() } : {}),
          rejectUnauthorized: config.dbMysqlSslVerify,
        },
      } : {}),
    },
  },
  postgres: {
    client: 'pg',
    connection: {
      host: config.dbPostgresHost,
      port: config.dbPostgresPort,
      ...(config.dbPostgresUser ? { user: config.dbPostgresUser } : {}),
      ...(config.dbPostgresPassword ? { password: config.dbPostgresPassword } : {}),
      database: config.dbPostgresDatabase,
      ...(config.dbPostgresSsl ? {
        ssl: {
          ...(config.dbPostgresSslCa ? { ca: fs.readFileSync(config.dbPostgresSslCa).toString() } : {}),
          ...(config.dbPostgresSslCert ? { cert: fs.readFileSync(config.dbPostgresSslCert).toString() } : {}),
          ...(config.dbPostgresSslKey ? { key: fs.readFileSync(config.dbPostgresSslKey).toString() } : {}),
          rejectUnauthorized: config.dbPostgresSslVerify,
        },
      } : {}),
    },
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: config.dbSqliteFile,
    },
    useNullAsDefault: true,
  },
};

export default moduleConfig[module];
