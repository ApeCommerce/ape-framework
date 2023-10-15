export default {
  appBoot: 'boot',

  logLevel: 'info',
  logDestination: 'stdout',
  logFile: 'ape.log',

  apiName: 'New Ape Project',
  apiVersion: '0.0.0',
  apiHost: '0.0.0.0',
  apiPort: 3000,
  apiConnectionTimeout: '10s',
  apiRequestTimeout: '10s',
  apiKeepAliveTimeout: '10s',
  apiBodyLimit: '2kb',

  pwdHashCost: 10,

  i18nFallbackLanguage: 'en',

  dbModule: 'sqlite',
  dbMysqlPort: 3306,
  dbMysqlSslVerify: true,
  dbMysqlMaxConnection: 5,
  dbPostgresPort: 5432,
  dbPostgresSslVerify: true,
  dbPostgresMaxConnection: 5,
  dbSqliteFile: 'ape.db',

  cacheModule: 'bypass',
  cacheRedisPort: 6379,
  cacheRedisPrefix: 'cache',

  mqModule: 'bypass',
  mqRedisPort: 6379,
  mqRedisPrefix: 'mq',

  mailModule: 'bypass',
  mailSmtpPort: 587,
};
