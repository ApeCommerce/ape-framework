import fs from 'fs-extra';
import { getConfig } from '../../config';
import { parseBoolean } from '../../utils';
import type { Database } from '../database';

const dbConfig: () => Database.Config = () => {
  const config = getConfig();

  if (!config.dbMysqlHost) throw new Error('db: mysql host not provided');
  if (!config.dbMysqlPort) throw new Error('db: mysql port not provided');
  if (!config.dbMysqlDatabase) throw new Error('db: mysql database not provided');

  const typeCast = (field: any, next: Function) => {
    if (field.type === 'TINY') {
      field.value = field.string();
      return field.value === null ? null : parseBoolean(field.value);
    }
    if (field.type === 'NEWDECIMAL') {
      field.value = field.string();
      return field.value === null ? null : parseFloat(field.value);
    }
    return next();
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
      typeCast,
    },
    pool: { min: 0, max: config.dbMysqlPoolMax },
  };
};

export default dbConfig;
