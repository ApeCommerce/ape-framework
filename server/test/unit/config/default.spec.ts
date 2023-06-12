import { getConfig } from 'config';

describe('Getting the config from defaults', () => {
  test('Returns expected value', async () => {
    expect(getConfig()).toStrictEqual({
      bootModule: 'boot',

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

      logLevel: 'info',
      logDestination: 'stdout',
      logPretty: false,
      logFile: 'log.txt',

      dbModule: 'sqlite',
      dbMariadbHost: '',
      dbMariadbPort: 3306,
      dbMariadbUser: '',
      dbMariadbPassword: '',
      dbMariadbDatabase: '',
      dbMariadbSsl: false,
      dbMariadbSslCa: '',
      dbMariadbSslCert: '',
      dbMariadbSslKey: '',
      dbMariadbSslVerify: true,
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
      dbSqliteFile: 'db.sqlite',

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
