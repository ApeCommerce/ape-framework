import 'test/fixture/config/env';
import { getConfig } from 'config';

describe('Getting the config from environment', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      bootModule: 'envBoot',

      apiName: 'ENV Ape Project',
      apiVersion: '0.0.1',
      apiHost: '0.0.0.1',
      apiPort: 1001,
      apiRandomPort: true,
      apiConnectionTimeout: 1,
      apiRequestTimeout: 1,
      apiKeepAliveTimeout: 1,
      apiBodyLimit: 1,
      apiResponseValidation: true,

      jwtIssuer: 'envIssuer',
      jwtSecret: 'envSecret',

      pwdHashCost: 1,

      i18nFallbackLanguage: 'fr',

      logLevel: 'warn',
      logDestination: 'file',
      logPretty: true,
      logFile: 'envLog.txt',

      dbModule: 'mariadb',
      dbMariadbHost: 'envMariadb',
      dbMariadbPort: 1001,
      dbMariadbUser: 'envUser',
      dbMariadbPassword: 'envPassword',
      dbMariadbDatabase: 'envDatabase',
      dbMysqlHost: 'envMysql',
      dbMysqlPort: 1001,
      dbMysqlUser: 'envUser',
      dbMysqlPassword: 'envPassword',
      dbMysqlDatabase: 'envDatabase',
      dbPostgresHost: 'envPostgres',
      dbPostgresPort: 1001,
      dbPostgresUser: 'envUser',
      dbPostgresPassword: 'envPassword',
      dbPostgresDatabase: 'envDatabase',
      dbSqliteFile: 'envDb.sqlite',

      cacheModule: 'redis',
      cacheRedisHost: 'envRedis',
      cacheRedisPort: 1001,
      cacheRedisUser: 'envUser',
      cacheRedisPassword: 'envPassword',
      cacheRedisPrefix: 'envPrefix',

      mqModule: 'redis',
      mqRedisHost: 'envRedis',
      mqRedisPort: 1001,
      mqRedisUser: 'envUser',
      mqRedisPassword: 'envPassword',
      mqRedisPrefix: 'envPrefix',

      mailModule: 'smtp',
      mailSmtpHost: 'envSmtp',
      mailSmtpPort: 1001,
      mailSmtpUser: 'envUser',
      mailSmtpPassword: 'envPassword',
      mailSmtpEmail: 'envUser@example.com',
    });
  });
});