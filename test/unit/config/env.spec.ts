import '../../fixture/config/env';
import { getConfig } from 'config';

describe('Getting the config using environment', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      appBoot: 'envBoot',

      logLevel: 'warn',
      logDestination: 'file',
      logPretty: true,
      logFile: 'envApe.log',

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

      dbModule: 'memory',
      dbMysqlHost: 'envHost',
      dbMysqlPort: 1001,
      dbMysqlUser: 'envUser',
      dbMysqlPassword: 'envPassword',
      dbMysqlDatabase: 'envDatabase',
      dbMysqlSsl: true,
      dbMysqlSslCa: 'envSslCa',
      dbMysqlSslCert: 'envSslCert',
      dbMysqlSslKey: 'envSslKey',
      dbMysqlSslVerify: false,
      dbPostgresHost: 'envHost',
      dbPostgresPort: 1001,
      dbPostgresUser: 'envUser',
      dbPostgresPassword: 'envPassword',
      dbPostgresDatabase: 'envDatabase',
      dbPostgresSsl: true,
      dbPostgresSslCa: 'envSslCa',
      dbPostgresSslCert: 'envSslCert',
      dbPostgresSslKey: 'envSslKey',
      dbPostgresSslVerify: false,
      dbSqliteFile: 'envApe.db',

      cacheModule: 'redis',
      cacheRedisHost: 'envHost',
      cacheRedisPort: 1001,
      cacheRedisUser: 'envUser',
      cacheRedisPassword: 'envPassword',
      cacheRedisPrefix: 'envPrefix',

      mqModule: 'redis',
      mqRedisHost: 'envHost',
      mqRedisPort: 1001,
      mqRedisUser: 'envUser',
      mqRedisPassword: 'envPassword',
      mqRedisPrefix: 'envPrefix',

      mailModule: 'smtp',
      mailSmtpHost: 'envHost',
      mailSmtpPort: 1001,
      mailSmtpUser: 'envUser',
      mailSmtpPassword: 'envPassword',
      mailSmtpEmail: 'envUser@example.com',
    });
  });
});
