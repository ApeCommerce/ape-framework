import config from '../config';

export enum ModuleId {
  mariadb = 'mariadb',
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

const module = Object.values(ModuleId).find((id) => id === config.dbModule);
if (!module) { throw new Error(`Database: invalid module "${config.dbModule}"`); }

export const moduleId = module;

if (moduleId === ModuleId.mariadb) {
  if (!config.dbMariadbHost) { throw new Error('Database: mariadb host not provided'); }
  if (!config.dbMariadbPort) { throw new Error('Database: mariadb port not provided'); }
  if (!config.dbMariadbDatabase) { throw new Error('Database: mariadb database not provided'); }
} else if (moduleId === ModuleId.mysql) {
  if (!config.dbMysqlHost) { throw new Error('Database: mysql host not provided'); }
  if (!config.dbMysqlPort) { throw new Error('Database: mysql port not provided'); }
  if (!config.dbMysqlDatabase) { throw new Error('Database: mysql database not provided'); }
} else if (moduleId === ModuleId.postgres) {
  if (!config.dbPostgresHost) { throw new Error('Database: postgres host not provided'); }
  if (!config.dbPostgresPort) { throw new Error('Database: postgres port not provided'); }
  if (!config.dbPostgresDatabase) { throw new Error('Database: postgres database not provided'); }
}

const moduleConfig: { [moduleId in ModuleId]: any } = {
  mariadb: {
    client: 'mysql2',
    connection: {
      host: config.dbMariadbHost,
      port: config.dbMariadbPort,
      user: config.dbMariadbUser,
      password: config.dbMariadbPassword,
      database: config.dbMariadbDatabase,
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

export const migrationConfig = {
  tablePrefix: '_migration',
};

export default moduleConfig[moduleId];
