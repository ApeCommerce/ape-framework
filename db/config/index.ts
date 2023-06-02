import { Knex } from 'knex';
import fs from 'fs';
import { getConfig } from '../../config';

const config = getConfig();

export enum Module {
  mariadb = 'mariadb',
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

export const module = Object.values(Module).find((m) => m === config.dbModule);
if (!module) throw new Error(`Database: invalid module "${config.dbModule}"`);

if (module === Module.mariadb) {
  if (!config.dbMariadbHost) throw new Error('DB: mariadb host not provided');
  if (!config.dbMariadbPort) throw new Error('DB: mariadb port not provided');
  if (!config.dbMariadbDatabase) throw new Error('DB: mariadb database not provided');
} else if (module === Module.mysql) {
  if (!config.dbMysqlHost) throw new Error('DB: mysql host not provided');
  if (!config.dbMysqlPort) throw new Error('DB: mysql port not provided');
  if (!config.dbMysqlDatabase) throw new Error('DB: mysql database not provided');
} else if (module === Module.postgres) {
  if (!config.dbPostgresHost) throw new Error('DB: postgres host not provided');
  if (!config.dbPostgresPort) throw new Error('DB: postgres port not provided');
  if (!config.dbPostgresDatabase) throw new Error('DB: postgres database not provided');
}

const moduleConfig: { [module in Module]: Knex.Config } = {
  mariadb: {
    client: 'mysql2',
    connection: {
      host: config.dbMariadbHost,
      port: config.dbMariadbPort,
      user: config.dbMariadbUser,
      password: config.dbMariadbPassword,
      database: config.dbMariadbDatabase,
      ssl: config.dbMariadbSsl ? {
        ca: config.dbMariadbSslCa ? fs.readFileSync(config.dbMariadbSslCa).toString() : undefined,
        cert: config.dbMariadbSslCert ? fs.readFileSync(config.dbMariadbSslCert).toString() : undefined,
        key: config.dbMariadbSslKey ? fs.readFileSync(config.dbMariadbSslKey).toString() : undefined,
        rejectUnauthorized: config.dbMariadbSslVerify,
      } : undefined,
    },
  },
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
      user: config.dbMysqlUser,
      password: config.dbMysqlPassword,
      database: config.dbMysqlDatabase,
      ssl: config.dbMysqlSsl ? {
        ca: config.dbMysqlSslCa ? fs.readFileSync(config.dbMysqlSslCa).toString() : undefined,
        cert: config.dbMysqlSslCert ? fs.readFileSync(config.dbMysqlSslCert).toString() : undefined,
        key: config.dbMysqlSslKey ? fs.readFileSync(config.dbMysqlSslKey).toString() : undefined,
        rejectUnauthorized: config.dbMysqlSslVerify,
      } : undefined,
    },
  },
  postgres: {
    client: 'pg',
    connection: {
      host: config.dbPostgresHost,
      port: config.dbPostgresPort,
      user: config.dbPostgresUser,
      password: config.dbPostgresPassword,
      database: config.dbPostgresDatabase,
      ssl: config.dbPostgresSsl ? {
        ca: config.dbPostgresSslCa ? fs.readFileSync(config.dbPostgresSslCa).toString() : undefined,
        cert: config.dbPostgresSslCert ? fs.readFileSync(config.dbPostgresSslCert).toString() : undefined,
        key: config.dbPostgresSslKey ? fs.readFileSync(config.dbPostgresSslKey).toString() : undefined,
        rejectUnauthorized: config.dbPostgresSslVerify,
      } : undefined,
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
