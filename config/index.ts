import { Configuration } from './configuration';
import { parseBoolean, parseBytes, parseJsonFile, parseMilliseconds, parseNumber, parseString } from '../utils';
import env from './env';

const json = parseJsonFile('ape.config.json');

const config: Configuration = {
  bootModule: parseString(json.bootModule || env.bootModule || 'boot'),

  apiName: parseString(json.apiName || env.apiName || 'New Ape Project'),
  apiVersion: parseString(json.apiVersion || env.apiVersion || '0.0.0'),
  apiHost: parseString(json.apiHost || env.apiHost || '0.0.0.0'),
  apiPort: parseNumber(json.apiPort || env.apiPort || 3000),
  apiRandomPort: parseBoolean(json.apiRandomPort || env.apiRandomPort),
  apiConnectionTimeout: parseMilliseconds(json.apiConnectionTimeout || env.apiConnectionTimeout || '10s'),
  apiRequestTimeout: parseMilliseconds(json.apiRequestTimeout || env.apiRequestTimeout || '10s'),
  apiKeepAliveTimeout: parseMilliseconds(json.apiKeepAliveTimeout || env.apiKeepAliveTimeout || '10s'),
  apiBodyLimit: parseBytes(json.apiBodyLimit || env.apiBodyLimit || '2kb'),
  apiResponseValidation: parseBoolean(json.apiResponseValidation || env.apiResponseValidation),

  jwtIssuer: parseString(json.jwtIssuer || env.jwtIssuer),
  jwtSecret: parseString(json.jwtSecret || env.jwtSecret),

  pwdHashCost: parseNumber(json.pwdHashCost || env.pwdHashCost || 10),

  i18nFallbackLanguage: parseString(json.i18nFallbackLanguage || env.i18nFallbackLanguage || 'en'),

  logLevel: parseString(json.logLevel || env.logLevel || 'info'),
  logDestination: parseString(json.logDestination || env.logDestination || 'stdout'),
  logPretty: parseBoolean(json.logPretty || env.logPretty),
  logFile: parseString(json.logFile || env.logFile || 'log.txt'),

  dbModule: parseString(json.dbModule || env.dbModule || 'sqlite'),
  dbMariadbHost: parseString(json.dbMariadbHost || env.dbMariadbHost),
  dbMariadbPort: parseNumber(json.dbMariadbPort || env.dbMariadbPort || 3306),
  dbMariadbUser: parseString(json.dbMariadbUser || env.dbMariadbUser),
  dbMariadbPassword: parseString(json.dbMariadbPassword || env.dbMariadbPassword),
  dbMariadbDatabase: parseString(json.dbMariadbDatabase || env.dbMariadbDatabase),
  dbMysqlHost: parseString(json.dbMysqlHost || env.dbMysqlHost),
  dbMysqlPort: parseNumber(json.dbMysqlPort || env.dbMysqlPort || 3306),
  dbMysqlUser: parseString(json.dbMysqlUser || env.dbMysqlUser),
  dbMysqlPassword: parseString(json.dbMysqlPassword || env.dbMysqlPassword),
  dbMysqlDatabase: parseString(json.dbMysqlDatabase || env.dbMysqlDatabase),
  dbPostgresHost: parseString(json.dbPostgresHost || env.dbPostgresHost),
  dbPostgresPort: parseNumber(json.dbPostgresPort || env.dbPostgresPort || 5432),
  dbPostgresUser: parseString(json.dbPostgresUser || env.dbPostgresUser),
  dbPostgresPassword: parseString(json.dbPostgresPassword || env.dbPostgresPassword),
  dbPostgresDatabase: parseString(json.dbPostgresDatabase || env.dbPostgresDatabase),
  dbSqliteFile: parseString(json.dbSqliteFile || env.dbSqliteFile || 'db.sqlite'),

  cacheModule: parseString(json.cacheModule || env.cacheModule || 'bypass'),
  cacheRedisHost: parseString(json.cacheRedisHost || env.cacheRedisHost),
  cacheRedisPort: parseNumber(json.cacheRedisPort || env.cacheRedisPort || 6379),
  cacheRedisUser: parseString(json.cacheRedisUser || env.cacheRedisUser),
  cacheRedisPassword: parseString(json.cacheRedisPassword || env.cacheRedisPassword),
  cacheRedisPrefix: parseString(json.cacheRedisPrefix || env.cacheRedisPrefix || 'cache'),

  mqModule: parseString(json.mqModule || env.mqModule || 'bypass'),
  mqRedisHost: parseString(json.mqRedisHost || env.mqRedisHost),
  mqRedisPort: parseNumber(json.mqRedisPort || env.mqRedisPort || 6379),
  mqRedisUser: parseString(json.mqRedisUser || env.mqRedisUser),
  mqRedisPassword: parseString(json.mqRedisPassword || env.mqRedisPassword),
  mqRedisPrefix: parseString(json.mqRedisPrefix || env.mqRedisPrefix || 'mq'),

  mailModule: parseString(json.mailModule || env.mailModule || 'bypass'),
  mailSmtpHost: parseString(json.mailSmtpHost || env.mailSmtpHost),
  mailSmtpPort: parseNumber(json.mailSmtpPort || env.mailSmtpPort || 587),
  mailSmtpUser: parseString(json.mailSmtpUser || env.mailSmtpUser),
  mailSmtpPassword: parseString(json.mailSmtpPassword || env.mailSmtpPassword),
  mailSmtpEmail: parseString(json.mailSmtpEmail || env.mailSmtpEmail),
};

export default config;
