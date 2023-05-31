export default {
  bootModule: 'boot',

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

  logLevel: 'info',
  logDestination: 'stdout',
  logFile: 'log.txt',

  dbModule: 'sqlite',
  dbMariadbPort: 3306,
  dbMysqlPort: 3306,
  dbPostgresPort: 5432,
  dbSqliteFile: 'db.sqlite',

  cacheModule: 'bypass',
  cacheRedisPort: 6379,
  cacheRedisPrefix: 'cache',

  mqModule: 'bypass',
  mqRedisPort: 6379,
  mqRedisPrefix: 'mq',

  mailModule: 'bypass',
  mailSmtpPort: 587,
};
