import { Configuration } from 'config';
import { parseBytes, parseMilliseconds } from 'utils';

const override: Configuration = {
  bootModule: 'overrideBoot',

  logLevel: 'fatal',
  logDestination: 'file',
  logPretty: true,
  logFile: 'overrideApe.log',

  apiName: 'OVERRIDE Ape Project',
  apiVersion: '0.0.3',
  apiHost: '0.0.0.3',
  apiPort: 1003,
  apiRandomPort: true,
  apiConnectionTimeout: parseMilliseconds('3ms'),
  apiRequestTimeout: parseMilliseconds('3ms'),
  apiKeepAliveTimeout: parseMilliseconds('3ms'),
  apiBodyLimit: parseBytes('3b'),
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
};

export default override;
