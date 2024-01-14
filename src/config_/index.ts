// import { parseBoolean, parseBytes, parseMilliseconds, parseNumber, parseString } from '../utils'
import { Store } from './store'
// import defaults from './default'
// import env from './env'
// import loadFile from './loadFile'
import type { Configuration } from './configuration'

export { Configuration, Store }

export type ParseType =
  'boolean' |
  'bytes' |
  'milliseconds' |
  'number' |
  'seconds' |
  'string'

export type ValueType = boolean | number | string

export class Config<T extends object> {
  private configuration: T | undefined

  private properties: {
    [property in keyof T]: {
      type: ParseType,
      default?: ValueType,
    }
  } | undefined

  constructor(properties: {
    [property in keyof T]: {
      type: ParseType,
      default?: ValueType,
    }
  }) {
    this.properties = properties
  }

  // initConfig(override: any = {}, file = 'ape.config.json') {
  //   //   const json = loadFile(file)

  //   //   const store = new Store(override, json, env, defaults)

  //   //   configuration = {
  // }
}

interface MyConf {
  one: string,
  two: number,
  three: boolean,
}

new Config<MyConf>({
  one: {
    type: 'boolean',
    default: false,
  },
  two: {
    type: 'boolean',
    default: false,
  },
  three: {
    type: 'boolean',
    default: false,
  },
})

// export const initConfig = (override: any = {}, file = 'ape.config.json') => {
//   const json = loadFile(file)

//   const store = new Store(override, json, env, defaults)

//   configuration = {
//     appBoot: parseString(store.get('appBoot')),

//     logLevel: parseString(store.get('logLevel')),
//     logDestination: parseString(store.get('logDestination')),
//     logPretty: parseBoolean(store.get('logPretty')),
//     logFile: parseString(store.get('logFile')),

//     apiName: parseString(store.get('apiName')),
//     apiVersion: parseString(store.get('apiVersion')),
//     apiHost: parseString(store.get('apiHost')),
//     apiPort: parseNumber(store.get('apiPort')),
//     apiRandomPort: parseBoolean(store.get('apiRandomPort')),
//     apiConnectionTimeout: parseMilliseconds(store.get('apiConnectionTimeout')),
//     apiRequestTimeout: parseMilliseconds(store.get('apiRequestTimeout')),
//     apiKeepAliveTimeout: parseMilliseconds(store.get('apiKeepAliveTimeout')),
//     apiBodyLimit: parseBytes(store.get('apiBodyLimit')),
//     apiResponseValidation: parseBoolean(store.get('apiResponseValidation')),

//     jwtIssuer: parseString(store.get('jwtIssuer')),
//     jwtSecret: parseString(store.get('jwtSecret')),

//     pwdHashCost: parseNumber(store.get('pwdHashCost')),

//     i18nFallbackLanguage: parseString(store.get('i18nFallbackLanguage')),

//     dbModule: parseString(store.get('dbModule')),
//     dbMysqlHost: parseString(store.get('dbMysqlHost')),
//     dbMysqlPort: parseNumber(store.get('dbMysqlPort')),
//     dbMysqlUser: parseString(store.get('dbMysqlUser')),
//     dbMysqlPassword: parseString(store.get('dbMysqlPassword')),
//     dbMysqlDatabase: parseString(store.get('dbMysqlDatabase')),
//     dbMysqlSsl: parseBoolean(store.get('dbMysqlSsl')),
//     dbMysqlSslCa: parseString(store.get('dbMysqlSslCa')),
//     dbMysqlSslCert: parseString(store.get('dbMysqlSslCert')),
//     dbMysqlSslKey: parseString(store.get('dbMysqlSslKey')),
//     dbMysqlSslVerify: parseBoolean(store.get('dbMysqlSslVerify')),
//     dbMysqlPoolMax: parseNumber(store.get('dbMysqlPoolMax')),
//     dbPostgresHost: parseString(store.get('dbPostgresHost')),
//     dbPostgresPort: parseNumber(store.get('dbPostgresPort')),
//     dbPostgresUser: parseString(store.get('dbPostgresUser')),
//     dbPostgresPassword: parseString(store.get('dbPostgresPassword')),
//     dbPostgresDatabase: parseString(store.get('dbPostgresDatabase')),
//     dbPostgresSsl: parseBoolean(store.get('dbPostgresSsl')),
//     dbPostgresSslCa: parseString(store.get('dbPostgresSslCa')),
//     dbPostgresSslCert: parseString(store.get('dbPostgresSslCert')),
//     dbPostgresSslKey: parseString(store.get('dbPostgresSslKey')),
//     dbPostgresSslVerify: parseBoolean(store.get('dbPostgresSslVerify')),
//     dbPostgresPoolMax: parseNumber(store.get('dbPostgresPoolMax')),
//     dbSqliteFile: parseString(store.get('dbSqliteFile')),

//     cacheModule: parseString(store.get('cacheModule')),
//     cacheRedisHost: parseString(store.get('cacheRedisHost')),
//     cacheRedisPort: parseNumber(store.get('cacheRedisPort')),
//     cacheRedisUser: parseString(store.get('cacheRedisUser')),
//     cacheRedisPassword: parseString(store.get('cacheRedisPassword')),
//     cacheRedisPrefix: parseString(store.get('cacheRedisPrefix')),

//     mqModule: parseString(store.get('mqModule')),
//     mqRedisHost: parseString(store.get('mqRedisHost')),
//     mqRedisPort: parseNumber(store.get('mqRedisPort')),
//     mqRedisUser: parseString(store.get('mqRedisUser')),
//     mqRedisPassword: parseString(store.get('mqRedisPassword')),
//     mqRedisPrefix: parseString(store.get('mqRedisPrefix')),

//     mailModule: parseString(store.get('mailModule')),
//     mailSmtpHost: parseString(store.get('mailSmtpHost')),
//     mailSmtpPort: parseNumber(store.get('mailSmtpPort')),
//     mailSmtpUser: parseString(store.get('mailSmtpUser')),
//     mailSmtpPassword: parseString(store.get('mailSmtpPassword')),
//     mailSmtpEmail: parseString(store.get('mailSmtpEmail')),
//   }

//   return configuration
// }

// export const getConfig = () => configuration ?? initConfig()
