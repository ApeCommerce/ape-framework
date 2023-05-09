import env from 'framework/env';

enum Module {
  mariadb = 'mariadb',
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

const module = Object.values(Module).find((m) => m === (env.dbModule || Module.sqlite));
if (!module) { throw new Error(`DB: invalid module "${env.dbModule}"`); }

if (module === Module.mariadb) {
  if (!env.dbMariadbHost) { throw new Error('DB: mariadb host not provided'); }
  if (!env.dbMariadbDatabase) { throw new Error('DB: mariadb database not provided'); }
} else if (module === Module.mysql) {
  if (!env.dbMysqlHost) { throw new Error('DB: mysql host not provided'); }
  if (!env.dbMysqlDatabase) { throw new Error('DB: mysql database not provided'); }
} else if (module === Module.postgres) {
  if (!env.dbPostgresHost) { throw new Error('DB: postgres host not provided'); }
  if (!env.dbPostgresDatabase) { throw new Error('DB: postgres database not provided'); }
}

const config: { [module in Module]: any } = {
  mariadb: {
    client: 'mysql2',
    connection: {
      host: env.dbMariadbHost,
      port: env.dbMariadbPort || 3306,
      user: env.dbMariadbUser,
      password: env.dbMariadbPassword,
      database: env.dbMariadbDatabase,
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
      host: env.dbMysqlHost,
      port: env.dbMysqlPort || 3306,
      user: env.dbMysqlUser,
      password: env.dbMysqlPassword,
      database: env.dbMysqlDatabase,
    },
  },
  postgres: {
    client: 'pg',
    connection: {
      host: env.dbPostgresHost,
      port: env.dbPostgresPort || 5432,
      user: env.dbPostgresUser,
      password: env.dbPostgresPassword,
      database: env.dbPostgresDatabase,
    },
  },
  sqlite: {
    client: 'sqlite3',
    connection: {
      filename: env.dbSqliteFile || 'db.sqlite',
    },
    useNullAsDefault: true,
  },
};

export const migrationConfig = {
  tablePrefix: '_migration',
};

export default config[module];
