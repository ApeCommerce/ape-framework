import { getConfig } from '../../config';
import memoryConfig from './memory';
import mysqlConfig from './mysql';
import postgresConfig from './postgres';
import sqliteConfig from './sqlite';
import type { Database } from '../database';

const config = getConfig();

export enum Module {
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

export const module = Object.values(Module).find((m) => m === config.dbModule);
if (!module) throw new Error(`db: invalid module "${config.dbModule}"`);

const dbConfig: { [module in Module]: () => Database.Config } = {
  memory: memoryConfig,
  mysql: mysqlConfig,
  postgres: postgresConfig,
  sqlite: sqliteConfig,
};

export default dbConfig[module]();
