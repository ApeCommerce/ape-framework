import { Configuration } from './configuration';
import { parseBoolean, parseBytes, parseJsonFile, parseMilliseconds, parseNumber, parseString } from '../utils';
import env from './env';

const json = parseJsonFile('ape.config.json');

const config: Configuration = {
  bootModule: parseString(json.bootModule || env.bootModule || 'boot'),

  apiName: parseString(json.apiName || env.apiName),
  apiVersion: parseString(json.apiVersion || env.apiVersion),
  apiHost: parseString(json.apiHost || env.apiHost),
  apiPort: parseNumber(json.apiPort || env.apiPort),
  apiRandomPort: parseBoolean(json.apiRandomPort || env.apiRandomPort),
  apiConnectionTimeout: parseMilliseconds(json.apiConnectionTimeout || env.apiConnectionTimeout),
  apiRequestTimeout: parseMilliseconds(json.apiRequestTimeout || env.apiRequestTimeout),
  apiKeepAliveTimeout: parseMilliseconds(json.apiKeepAliveTimeout || env.apiKeepAliveTimeout),
  apiBodyLimit: parseBytes(json.apiBodyLimit || env.apiBodyLimit),
  apiResponseValidation: parseBoolean(json.apiResponseValidation || env.apiResponseValidation),

  jwtIssuer: parseString(json.jwtIssuer || env.jwtIssuer),
  jwtSecret: parseString(json.jwtSecret || env.jwtSecret),

  pwdHashCost: parseNumber(json.pwdHashCost || env.pwdHashCost),

  i18nFallbackLanguage: parseString(json.i18nFallbackLanguage || env.i18nFallbackLanguage),

  logLevel: parseString(json.logLevel || env.logLevel),
  logDestination: parseString(json.logDestination || env.logDestination),
  logPretty: parseBoolean(json.logPretty || env.logPretty),
  logFile: parseString(json.logFile || env.logFile),

  dbModule: parseString(json.dbModule || env.dbModule),
  dbMariadbHost: parseString(json.dbMariadbHost || env.dbMariadbHost),
  dbMariadbPort: parseNumber(json.dbMariadbPort || env.dbMariadbPort),
  dbMariadbUser: parseString(json.dbMariadbUser || env.dbMariadbUser),
  dbMariadbPassword: parseString(json.dbMariadbPassword || env.dbMariadbPassword),
  dbMariadbDatabase: parseString(json.dbMariadbDatabase || env.dbMariadbDatabase),
  dbMysqlHost: parseString(json.dbMysqlHost || env.dbMysqlHost),
  dbMysqlPort: parseNumber(json.dbMysqlPort || env.dbMysqlPort),
  dbMysqlUser: parseString(json.dbMysqlUser || env.dbMysqlUser),
  dbMysqlPassword: parseString(json.dbMysqlPassword || env.dbMysqlPassword),
  dbMysqlDatabase: parseString(json.dbMysqlDatabase || env.dbMysqlDatabase),
  dbPostgresHost: parseString(json.dbPostgresHost || env.dbPostgresHost),
  dbPostgresPort: parseNumber(json.dbPostgresPort || env.dbPostgresPort),
  dbPostgresUser: parseString(json.dbPostgresUser || env.dbPostgresUser),
  dbPostgresPassword: parseString(json.dbPostgresPassword || env.dbPostgresPassword),
  dbPostgresDatabase: parseString(json.dbPostgresDatabase || env.dbPostgresDatabase),
  dbSqliteFile: parseString(json.dbSqliteFile || env.dbSqliteFile),

  cacheModule: parseString(json.cacheModule || env.cacheModule),
  cacheRedisHost: parseString(json.cacheRedisHost || env.cacheRedisHost),
  cacheRedisPort: parseNumber(json.cacheRedisPort || env.cacheRedisPort),
  cacheRedisUser: parseString(json.cacheRedisUser || env.cacheRedisUser),
  cacheRedisPassword: parseString(json.cacheRedisPassword || env.cacheRedisPassword),
  cacheRedisPrefix: parseString(json.cacheRedisPrefix || env.cacheRedisPrefix),

  mqModule: parseString(json.mqModule || env.mqModule),
  mqRedisHost: parseString(json.mqRedisHost || env.mqRedisHost),
  mqRedisPort: parseNumber(json.mqRedisPort || env.mqRedisPort),
  mqRedisUser: parseString(json.mqRedisUser || env.mqRedisUser),
  mqRedisPassword: parseString(json.mqRedisPassword || env.mqRedisPassword),
  mqRedisPrefix: parseString(json.mqRedisPrefix || env.mqRedisPrefix),

  mailModule: parseString(json.mailModule || env.mailModule),
  mailSmtpHost: parseString(json.mailSmtpHost || env.mailSmtpHost),
  mailSmtpPort: parseNumber(json.mailSmtpPort || env.mailSmtpPort),
  mailSmtpUser: parseString(json.mailSmtpUser || env.mailSmtpUser),
  mailSmtpPassword: parseString(json.mailSmtpPassword || env.mailSmtpPassword),
  mailSmtpEmail: parseString(json.mailSmtpEmail || env.mailSmtpEmail),
};

export default config;
