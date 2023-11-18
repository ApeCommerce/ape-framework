import fs from 'fs-extra';
import { getConfig } from '../../config';
import type { Database } from '../database';

const dbConfig: () => Database.Config = () => {
  const config = getConfig();

  if (!config.dbMysqlHost) throw new Error('db: mysql host not provided');
  if (!config.dbMysqlPort) throw new Error('db: mysql port not provided');
  if (!config.dbMysqlDatabase) throw new Error('db: mysql database not provided');

  let typeCastValue: any;

  const typeCast = (field: any, next: Function) => {
    switch (field.type) {
      case 'BIT':
        typeCastValue = field.buffer();
        return typeCastValue === null ? null : !!typeCastValue[0];
      case 'NEWDECIMAL':
        typeCastValue = field.string();
        return typeCastValue === null ? null : parseFloat(typeCastValue);
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
