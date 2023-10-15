import '../../fixture/config/env';
import { getConfig, initConfig } from 'config';
import override from '../../fixture/config/override';

initConfig(override, 'test/fixture/config/file/ape.config.json');

describe('Getting the config using override', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      appBoot: 'overrideBoot',

      logLevel: 'fatal',
      logDestination: 'file',
      logPretty: true,
      logFile: 'overrideApe.log',

      apiName: 'OVERRIDE Ape Project',
      apiVersion: '0.0.3',
      apiHost: '0.0.0.3',
      apiPort: 1003,
      apiRandomPort: true,
      apiConnectionTimeout: 3,
      apiRequestTimeout: 3,
      apiKeepAliveTimeout: 3,
      apiBodyLimit: 3,
      apiResponseValidation: true,

      jwtIssuer: 'overrideIssuer',
      jwtSecret: 'overrideSecret',

      pwdHashCost: 3,

      i18nFallbackLanguage: 'ja',

      dbModule: 'postgres',
      dbMysqlHost: 'overrideHost',
      dbMysqlPort: 1003,
      dbMysqlUser: 'overrideUser',
      dbMysqlPassword: 'overridePassword',
      dbMysqlDatabase: 'overrideDatabase',
      dbMysqlSsl: true,
      dbMysqlSslCa: 'overrideSslCa',
      dbMysqlSslCert: 'overrideSslCert',
      dbMysqlSslKey: 'overrideSslKey',
      dbMysqlSslVerify: false,
      dbMysqlMaxConnection: 3,
      dbPostgresHost: 'overrideHost',
      dbPostgresPort: 1003,
      dbPostgresUser: 'overrideUser',
      dbPostgresPassword: 'overridePassword',
      dbPostgresDatabase: 'overrideDatabase',
      dbPostgresSsl: true,
      dbPostgresSslCa: 'overrideSslCa',
      dbPostgresSslCert: 'overrideSslCert',
      dbPostgresSslKey: 'overrideSslKey',
      dbPostgresSslVerify: false,
      dbPostgresMaxConnection: 3,
      dbSqliteFile: 'overrideApe.db',

      cacheModule: 'redis',
      cacheRedisHost: 'overrideHost',
      cacheRedisPort: 1003,
      cacheRedisUser: 'overrideUser',
      cacheRedisPassword: 'overridePassword',
      cacheRedisPrefix: 'overridePrefix',

      mqModule: 'redis',
      mqRedisHost: 'overrideHost',
      mqRedisPort: 1003,
      mqRedisUser: 'overrideUser',
      mqRedisPassword: 'overridePassword',
      mqRedisPrefix: 'overridePrefix',

      mailModule: 'smtp',
      mailSmtpHost: 'overrideHost',
      mailSmtpPort: 1003,
      mailSmtpUser: 'overrideUser',
      mailSmtpPassword: 'overridePassword',
      mailSmtpEmail: 'overrideUser@example.com',
    });
  });
});
