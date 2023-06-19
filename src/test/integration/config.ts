import { initConfig } from 'config';

initConfig({
  bootModule: 'test/fixture/boot',

  logLevel: 'silent',
  logDestination: 'stdout',

  dbModule: 'memory',
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
