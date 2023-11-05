import '../../fixture/config/env';
import { getConfig, initConfig } from 'config';

initConfig({}, 'test/fixture/config/ape.config.json');

describe('Getting the configuration from file', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      appBoot: 'fileBoot',

      logLevel: 'error',
      logDestination: 'stdout',
      logPretty: false,
      logFile: 'fileApe.log',

      apiName: 'FILE Ape Project',
      apiVersion: '0.0.2',
      apiHost: '0.0.0.2',
      apiPort: 1002,
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

      dbModule: 'mysql',
      dbMysqlHost: 'fileHost',
      dbMysqlPort: 1002,
      dbMysqlUser: 'fileUser',
      dbMysqlPassword: 'filePassword',
      dbMysqlDatabase: 'fileDatabase',
      dbMysqlSsl: false,
      dbMysqlSslCa: 'fileSslCa',
      dbMysqlSslCert: 'fileSslCert',
      dbMysqlSslKey: 'fileSslKey',
      dbMysqlSslVerify: true,
      dbMysqlPoolMax: 2,
      dbPostgresHost: 'fileHost',
      dbPostgresPort: 1002,
      dbPostgresUser: 'fileUser',
      dbPostgresPassword: 'filePassword',
      dbPostgresDatabase: 'fileDatabase',
      dbPostgresSsl: false,
      dbPostgresSslCa: 'fileSslCa',
      dbPostgresSslCert: 'fileSslCert',
      dbPostgresSslKey: 'fileSslKey',
      dbPostgresSslVerify: true,
      dbPostgresPoolMax: 2,
      dbSqliteFile: 'fileApe.db',

      cacheModule: 'bypass',
      cacheRedisHost: 'fileHost',
      cacheRedisPort: 1002,
      cacheRedisUser: 'fileUser',
      cacheRedisPassword: 'filePassword',
      cacheRedisPrefix: 'filePrefix',

      mqModule: 'bypass',
      mqRedisHost: 'fileHost',
      mqRedisPort: 1002,
      mqRedisUser: 'fileUser',
      mqRedisPassword: 'filePassword',
      mqRedisPrefix: 'filePrefix',

      mailModule: 'bypass',
      mailSmtpHost: 'fileHost',
      mailSmtpPort: 1002,
      mailSmtpUser: 'fileUser',
      mailSmtpPassword: 'filePassword',
      mailSmtpEmail: 'fileUser@example.com',
    });
  });
});
