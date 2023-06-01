import { initConfig } from 'config';

initConfig({
  bootModule: 'test/fixture/boot',

  apiName: 'TEST Ape Project',
  apiVersion: '0.0.0-test',
  apiHost: '0.0.0.0',
  apiPort: 0,
  apiRandomPort: true,
  apiConnectionTimeout: 0,
  apiRequestTimeout: 0,
  apiKeepAliveTimeout: 0,
  apiBodyLimit: 0,
  apiResponseValidation: true,

  jwtIssuer: 'issuer',
  jwtSecret: 'secret',

  pwdHashCost: 3,

  i18nFallbackLanguage: 'en',

  logLevel: 'silent',
  logDestination: 'stdout',
  logPretty: false,
  logFile: '',

  dbModule: 'sqlite',
  dbMariadbHost: '',
  dbMariadbPort: 0,
  dbMariadbUser: '',
  dbMariadbPassword: '',
  dbMariadbDatabase: '',
  dbMysqlHost: '',
  dbMysqlPort: 0,
  dbMysqlUser: '',
  dbMysqlPassword: '',
  dbMysqlDatabase: '',
  dbPostgresHost: '',
  dbPostgresPort: 0,
  dbPostgresUser: '',
  dbPostgresPassword: '',
  dbPostgresDatabase: '',
  dbSqliteFile: '',

  cacheModule: 'bypass',
  cacheRedisHost: '',
  cacheRedisPort: 0,
  cacheRedisUser: '',
  cacheRedisPassword: '',
  cacheRedisPrefix: '',

  mqModule: 'bypass',
  mqRedisHost: '',
  mqRedisPort: 0,
  mqRedisUser: '',
  mqRedisPassword: '',
  mqRedisPrefix: '',

  mailModule: 'bypass',
  mailSmtpHost: '',
  mailSmtpPort: 0,
  mailSmtpUser: '',
  mailSmtpPassword: '',
  mailSmtpEmail: '',
});
