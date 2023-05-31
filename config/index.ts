import fs from 'fs';
import { Configuration } from './configuration';
import { loadJsonFile, parseBoolean, parseBytes, parseMilliseconds, parseNumber, parseString } from '../utils';
import defaults from './default';
import env from './env';

export const loadFile = (path: string) => {
  let json: any = {};
  if (fs.existsSync(path)) {
    json = loadJsonFile<any>(path);
  }
  return json;
};

export const loadProperty = (
  name: string,
  overrideConfig: any,
  fileConfig: any,
  envConfig: any,
  defaultConfig: any,
) => [
  overrideConfig[name],
  fileConfig[name],
  envConfig[name],
  defaultConfig[name],
].find((property) => property !== undefined);

const loadConfig = (override: Partial<Configuration>, file: string): Configuration => {
  const json = loadFile(file);

  return {
    bootModule: parseString(loadProperty('bootModule', override, json, env, defaults)),

    apiName: parseString(loadProperty('apiName', override, json, env, defaults)),
    apiVersion: parseString(loadProperty('apiVersion', override, json, env, defaults)),
    apiHost: parseString(loadProperty('apiHost', override, json, env, defaults)),
    apiPort: parseNumber(loadProperty('apiPort', override, json, env, defaults)),
    apiRandomPort: parseBoolean(loadProperty('apiRandomPort', override, json, env, defaults)),
    apiConnectionTimeout: parseMilliseconds(loadProperty('apiConnectionTimeout', override, json, env, defaults)),
    apiRequestTimeout: parseMilliseconds(loadProperty('apiRequestTimeout', override, json, env, defaults)),
    apiKeepAliveTimeout: parseMilliseconds(loadProperty('apiKeepAliveTimeout', override, json, env, defaults)),
    apiBodyLimit: parseBytes(loadProperty('apiBodyLimit', override, json, env, defaults)),
    apiResponseValidation: parseBoolean(loadProperty('apiResponseValidation', override, json, env, defaults)),

    jwtIssuer: parseString(loadProperty('jwtIssuer', override, json, env, defaults)),
    jwtSecret: parseString(loadProperty('jwtSecret', override, json, env, defaults)),

    pwdHashCost: parseNumber(loadProperty('pwdHashCost', override, json, env, defaults)),

    i18nFallbackLanguage: parseString(loadProperty('i18nFallbackLanguage', override, json, env, defaults)),

    logLevel: parseString(loadProperty('logLevel', override, json, env, defaults)),
    logDestination: parseString(loadProperty('logDestination', override, json, env, defaults)),
    logPretty: parseBoolean(loadProperty('logPretty', override, json, env, defaults)),
    logFile: parseString(loadProperty('logFile', override, json, env, defaults)),

    dbModule: parseString(loadProperty('dbModule', override, json, env, defaults)),
    dbMariadbHost: parseString(loadProperty('dbMariadbHost', override, json, env, defaults)),
    dbMariadbPort: parseNumber(loadProperty('dbMariadbPort', override, json, env, defaults)),
    dbMariadbUser: parseString(loadProperty('dbMariadbUser', override, json, env, defaults)),
    dbMariadbPassword: parseString(loadProperty('dbMariadbPassword', override, json, env, defaults)),
    dbMariadbDatabase: parseString(loadProperty('dbMariadbDatabase', override, json, env, defaults)),
    dbMysqlHost: parseString(loadProperty('dbMysqlHost', override, json, env, defaults)),
    dbMysqlPort: parseNumber(loadProperty('dbMysqlPort', override, json, env, defaults)),
    dbMysqlUser: parseString(loadProperty('dbMysqlUser', override, json, env, defaults)),
    dbMysqlPassword: parseString(loadProperty('dbMysqlPassword', override, json, env, defaults)),
    dbMysqlDatabase: parseString(loadProperty('dbMysqlDatabase', override, json, env, defaults)),
    dbPostgresHost: parseString(loadProperty('dbPostgresHost', override, json, env, defaults)),
    dbPostgresPort: parseNumber(loadProperty('dbPostgresPort', override, json, env, defaults)),
    dbPostgresUser: parseString(loadProperty('dbPostgresUser', override, json, env, defaults)),
    dbPostgresPassword: parseString(loadProperty('dbPostgresPassword', override, json, env, defaults)),
    dbPostgresDatabase: parseString(loadProperty('dbPostgresDatabase', override, json, env, defaults)),
    dbSqliteFile: parseString(loadProperty('dbSqliteFile', override, json, env, defaults)),

    cacheModule: parseString(loadProperty('cacheModule', override, json, env, defaults)),
    cacheRedisHost: parseString(loadProperty('cacheRedisHost', override, json, env, defaults)),
    cacheRedisPort: parseNumber(loadProperty('cacheRedisPort', override, json, env, defaults)),
    cacheRedisUser: parseString(loadProperty('cacheRedisUser', override, json, env, defaults)),
    cacheRedisPassword: parseString(loadProperty('cacheRedisPassword', override, json, env, defaults)),
    cacheRedisPrefix: parseString(loadProperty('cacheRedisPrefix', override, json, env, defaults)),

    mqModule: parseString(loadProperty('mqModule', override, json, env, defaults)),
    mqRedisHost: parseString(loadProperty('mqRedisHost', override, json, env, defaults)),
    mqRedisPort: parseNumber(loadProperty('mqRedisPort', override, json, env, defaults)),
    mqRedisUser: parseString(loadProperty('mqRedisUser', override, json, env, defaults)),
    mqRedisPassword: parseString(loadProperty('mqRedisPassword', override, json, env, defaults)),
    mqRedisPrefix: parseString(loadProperty('mqRedisPrefix', override, json, env, defaults)),

    mailModule: parseString(loadProperty('mailModule', override, json, env, defaults)),
    mailSmtpHost: parseString(loadProperty('mailSmtpHost', override, json, env, defaults)),
    mailSmtpPort: parseNumber(loadProperty('mailSmtpPort', override, json, env, defaults)),
    mailSmtpUser: parseString(loadProperty('mailSmtpUser', override, json, env, defaults)),
    mailSmtpPassword: parseString(loadProperty('mailSmtpPassword', override, json, env, defaults)),
    mailSmtpEmail: parseString(loadProperty('mailSmtpEmail', override, json, env, defaults)),
  };
};

let configuration: Configuration;

export const initConfig = (
  override: Partial<Configuration> = {},
  file: string = 'ape.config.json',
) => {
  configuration = loadConfig(override, file);
  return configuration;
};

export const getConfig = () => configuration || initConfig();

export default {
  getConfig,
  initConfig,
  loadFile,
  loadProperty,
};
