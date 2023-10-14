import { Config } from './config';
import { Configuration } from './configuration';
import { getProperty, loadFile } from './utils';
import { parseBoolean, parseBytes, parseMilliseconds, parseNumber, parseString } from '../utils';
import defaults from './default';
import env from './env';

export { Config, Configuration };

let configuration: Configuration;

export const initConfig = (override: any = {}, file: string = 'ape.config.json') => {
  const json = loadFile(file);

  configuration = {
    appBoot: parseString(getProperty('appBoot', override, json, env, defaults)),

    logLevel: parseString(getProperty('logLevel', override, json, env, defaults)),
    logDestination: parseString(getProperty('logDestination', override, json, env, defaults)),
    logPretty: parseBoolean(getProperty('logPretty', override, json, env, defaults)),
    logFile: parseString(getProperty('logFile', override, json, env, defaults)),

    apiName: parseString(getProperty('apiName', override, json, env, defaults)),
    apiVersion: parseString(getProperty('apiVersion', override, json, env, defaults)),
    apiHost: parseString(getProperty('apiHost', override, json, env, defaults)),
    apiPort: parseNumber(getProperty('apiPort', override, json, env, defaults)),
    apiRandomPort: parseBoolean(getProperty('apiRandomPort', override, json, env, defaults)),
    apiConnectionTimeout: parseMilliseconds(getProperty('apiConnectionTimeout', override, json, env, defaults)),
    apiRequestTimeout: parseMilliseconds(getProperty('apiRequestTimeout', override, json, env, defaults)),
    apiKeepAliveTimeout: parseMilliseconds(getProperty('apiKeepAliveTimeout', override, json, env, defaults)),
    apiBodyLimit: parseBytes(getProperty('apiBodyLimit', override, json, env, defaults)),
    apiResponseValidation: parseBoolean(getProperty('apiResponseValidation', override, json, env, defaults)),

    jwtIssuer: parseString(getProperty('jwtIssuer', override, json, env, defaults)),
    jwtSecret: parseString(getProperty('jwtSecret', override, json, env, defaults)),

    pwdHashCost: parseNumber(getProperty('pwdHashCost', override, json, env, defaults)),

    i18nFallbackLanguage: parseString(getProperty('i18nFallbackLanguage', override, json, env, defaults)),

    dbModule: parseString(getProperty('dbModule', override, json, env, defaults)),
    dbMysqlHost: parseString(getProperty('dbMysqlHost', override, json, env, defaults)),
    dbMysqlPort: parseNumber(getProperty('dbMysqlPort', override, json, env, defaults)),
    dbMysqlUser: parseString(getProperty('dbMysqlUser', override, json, env, defaults)),
    dbMysqlPassword: parseString(getProperty('dbMysqlPassword', override, json, env, defaults)),
    dbMysqlDatabase: parseString(getProperty('dbMysqlDatabase', override, json, env, defaults)),
    dbMysqlSsl: parseBoolean(getProperty('dbMysqlSsl', override, json, env, defaults)),
    dbMysqlSslCa: parseString(getProperty('dbMysqlSslCa', override, json, env, defaults)),
    dbMysqlSslCert: parseString(getProperty('dbMysqlSslCert', override, json, env, defaults)),
    dbMysqlSslKey: parseString(getProperty('dbMysqlSslKey', override, json, env, defaults)),
    dbMysqlSslVerify: parseBoolean(getProperty('dbMysqlSslVerify', override, json, env, defaults)),
    dbPostgresHost: parseString(getProperty('dbPostgresHost', override, json, env, defaults)),
    dbPostgresPort: parseNumber(getProperty('dbPostgresPort', override, json, env, defaults)),
    dbPostgresUser: parseString(getProperty('dbPostgresUser', override, json, env, defaults)),
    dbPostgresPassword: parseString(getProperty('dbPostgresPassword', override, json, env, defaults)),
    dbPostgresDatabase: parseString(getProperty('dbPostgresDatabase', override, json, env, defaults)),
    dbPostgresSsl: parseBoolean(getProperty('dbPostgresSsl', override, json, env, defaults)),
    dbPostgresSslCa: parseString(getProperty('dbPostgresSslCa', override, json, env, defaults)),
    dbPostgresSslCert: parseString(getProperty('dbPostgresSslCert', override, json, env, defaults)),
    dbPostgresSslKey: parseString(getProperty('dbPostgresSslKey', override, json, env, defaults)),
    dbPostgresSslVerify: parseBoolean(getProperty('dbPostgresSslVerify', override, json, env, defaults)),
    dbSqliteFile: parseString(getProperty('dbSqliteFile', override, json, env, defaults)),

    cacheModule: parseString(getProperty('cacheModule', override, json, env, defaults)),
    cacheRedisHost: parseString(getProperty('cacheRedisHost', override, json, env, defaults)),
    cacheRedisPort: parseNumber(getProperty('cacheRedisPort', override, json, env, defaults)),
    cacheRedisUser: parseString(getProperty('cacheRedisUser', override, json, env, defaults)),
    cacheRedisPassword: parseString(getProperty('cacheRedisPassword', override, json, env, defaults)),
    cacheRedisPrefix: parseString(getProperty('cacheRedisPrefix', override, json, env, defaults)),

    mqModule: parseString(getProperty('mqModule', override, json, env, defaults)),
    mqRedisHost: parseString(getProperty('mqRedisHost', override, json, env, defaults)),
    mqRedisPort: parseNumber(getProperty('mqRedisPort', override, json, env, defaults)),
    mqRedisUser: parseString(getProperty('mqRedisUser', override, json, env, defaults)),
    mqRedisPassword: parseString(getProperty('mqRedisPassword', override, json, env, defaults)),
    mqRedisPrefix: parseString(getProperty('mqRedisPrefix', override, json, env, defaults)),

    mailModule: parseString(getProperty('mailModule', override, json, env, defaults)),
    mailSmtpHost: parseString(getProperty('mailSmtpHost', override, json, env, defaults)),
    mailSmtpPort: parseNumber(getProperty('mailSmtpPort', override, json, env, defaults)),
    mailSmtpUser: parseString(getProperty('mailSmtpUser', override, json, env, defaults)),
    mailSmtpPassword: parseString(getProperty('mailSmtpPassword', override, json, env, defaults)),
    mailSmtpEmail: parseString(getProperty('mailSmtpEmail', override, json, env, defaults)),
  };

  return configuration;
};

export const getConfig = () => configuration || initConfig();

const config: Config = {
  getConfig,
  initConfig,
};

export default config;
