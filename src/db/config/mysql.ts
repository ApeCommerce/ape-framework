import fs from 'fs-extra';
import { getConfig } from '../../config';
import type { Database } from '../database';

const dbConfig: () => Database.Config = () => {
  const config = getConfig();

  if (!config.dbMysqlHost) throw new Error('db: mysql host not provided');
  if (!config.dbMysqlPort) throw new Error('db: mysql port not provided');
  if (!config.dbMysqlDatabase) throw new Error('db: mysql database not provided');

  const typeCast = (field: any, next: Function) => {
    let value: any;
    switch (field.type) {
      case 'BIT':
        value = field.buffer();
        return value === null ? null : !!value[0];
      case 'NEWDECIMAL':
        value = field.string();
        return value === null ? null : parseFloat(value);
      default:
        return next();
    }
  };

  return {
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
      dateStrings: true,
      typeCast,
    },
    pool: { min: 0, max: config.dbMysqlPoolMax },
  };
};

export default dbConfig;
