import 'test/fixture/config/env';
import { getConfig, initConfig } from 'config';

initConfig({}, 'test/fixture/config/file/ape.config.json');

describe('Getting the config from file', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      bootModule: 'fileBoot',

      apiName: 'FILE Ape Project',
      apiVersion: '0.0.2',
      apiHost: '0.0.0.2',
      apiPort: 2000,
      apiRandomPort: false,
      apiConnectionTimeout: 2,
      apiRequestTimeout: 2,
      apiKeepAliveTimeout: 2,
      apiBodyLimit: 2,
      apiResponseValidation: false,

      jwtIssuer: 'fileIssuer',
      jwtSecret: 'fileSecret',

      pwdHashCost: 2,

      i18nFallbackLanguage: 'fr-CA',

      logLevel: 'error',
      logDestination: 'stdout',
      logPretty: false,
      logFile: 'fileLog.txt',

      dbModule: 'mysql',
      dbMariadbHost: 'fileMariadb',
      dbMariadbPort: 2000,
      dbMariadbUser: 'fileUser',
      dbMariadbPassword: 'filePassword',
      dbMariadbDatabase: 'fileDatabase',
      dbMysqlHost: 'fileMysql',
      dbMysqlPort: 2000,
      dbMysqlUser: 'fileUser',
      dbMysqlPassword: 'filePassword',
      dbMysqlDatabase: 'fileDatabase',
      dbPostgresHost: 'filePostgres',
      dbPostgresPort: 2000,
      dbPostgresUser: 'fileUser',
      dbPostgresPassword: 'filePassword',
      dbPostgresDatabase: 'fileDatabase',
      dbSqliteFile: 'fileDb.sqlite',

      cacheModule: 'bypass',
      cacheRedisHost: 'fileRedis',
      cacheRedisPort: 2000,
      cacheRedisUser: 'fileUser',
      cacheRedisPassword: 'filePassword',
      cacheRedisPrefix: 'filePrefix',

      mqModule: 'bypass',
      mqRedisHost: 'fileRedis',
      mqRedisPort: 2000,
      mqRedisUser: 'fileUser',
      mqRedisPassword: 'filePassword',
      mqRedisPrefix: 'filePrefix',

      mailModule: 'bypass',
      mailSmtpHost: 'fileSmtp',
      mailSmtpPort: 2000,
      mailSmtpUser: 'fileUser',
      mailSmtpPassword: 'filePassword',
      mailSmtpEmail: 'fileUser@example.com',
    });
  });
});
