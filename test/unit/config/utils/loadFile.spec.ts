import { loadFile } from 'config/utils';

describe('Loading a file', () => {
  test('Returns expected value', async () => {
    expect(loadFile('test/fixture/config/ape.config.json')).toStrictEqual({
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
      apiConnectionTimeout: '2ms',
      apiRequestTimeout: '2ms',
      apiKeepAliveTimeout: '2ms',
      apiBodyLimit: '2b',
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

describe('Loading a missing file', () => {
  test('Returns expected value', async () => {
    expect(loadFile('oops')).toStrictEqual({});
  });
});