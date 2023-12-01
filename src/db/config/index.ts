import { getConfig } from '../../config'
import memoryConfig from './memory'
import mysqlConfig from './mysql'
import postgresConfig from './postgres'
import sqliteConfig from './sqlite'
import type { Database } from '../database'

const config = getConfig()

export enum Module {
  memory = 'memory',
  mysql = 'mysql',
  postgres = 'postgres',
  sqlite = 'sqlite',
}

const dbModule = Object.values(Module)
  .find((module: string) => module === config.dbModule)
if (!dbModule) throw new Error(`db: invalid module "${config.dbModule}"`)

export const module = dbModule

const dbConfigHandler: { [module in Module]: () => Database.Config } = {
  memory: memoryConfig,
  mysql: mysqlConfig,
  postgres: postgresConfig,
  sqlite: sqliteConfig,
}

const dbConfig: Database.Config = {
  ...dbConfigHandler[module](),
  useNullAsDefault: true,
}

export default dbConfig
