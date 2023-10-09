import { getConfig } from 'config';

describe('Getting the default config', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      appBoot: 'boot',

      logLevel: 'info',
      logDestination: 'stdout',
      logPretty: false,
      logFile: 'ape.log',

      apiName: 'New Ape Project',
      apiVersion: '0.0.0',
      apiHost: '0.0.0.0',
      apiPort: 3000,
      apiRandomPort: false,
      apiConnectionTimeout: 10000,
      apiRequestTimeout: 10000,
      apiKeepAliveTimeout: 10000,
      apiBodyLimit: 2048,
      apiResponseValidation: false,

      jwtIssuer: '',
      jwtSecret: '',

      pwdHashCost: 10,

      i18nFallbackLanguage: 'en',

      dbModule: 'sqlite',
      dbMysqlHost: '',
      dbMysqlPort: 3306,
      dbMysqlUser: '',
      dbMysqlPassword: '',
      dbMysqlDatabase: '',
      dbMysqlSsl: false,
      dbMysqlSslCa: '',
      dbMysqlSslCert: '',
      dbMysqlSslKey: '',
      dbMysqlSslVerify: true,
      dbPostgresHost: '',
      dbPostgresPort: 5432,
      dbPostgresUser: '',
      dbPostgresPassword: '',
      dbPostgresDatabase: '',
      dbPostgresSsl: false,
      dbPostgresSslCa: '',
      dbPostgresSslCert: '',
      dbPostgresSslKey: '',
      dbPostgresSslVerify: true,
      dbSqliteFile: 'ape.db',

      cacheModule: 'bypass',
      cacheRedisHost: '',
      cacheRedisPort: 6379,
      cacheRedisUser: '',
      cacheRedisPassword: '',
      cacheRedisPrefix: 'cache',

      mqModule: 'bypass',
      mqRedisHost: '',
      mqRedisPort: 6379,
      mqRedisUser: '',
      mqRedisPassword: '',
      mqRedisPrefix: 'mq',

      mailModule: 'bypass',
      mailSmtpHost: '',
      mailSmtpPort: 587,
      mailSmtpUser: '',
      mailSmtpPassword: '',
      mailSmtpEmail: '',
    });
  });
});
