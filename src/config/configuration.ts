export interface Configuration {
  appBoot: string,

  logLevel: string,
  logDestination: string,
  logPretty: boolean,
  logFile: string,

  apiName: string,
  apiVersion: string,
  apiHost: string,
  apiPort: number,
  apiRandomPort: boolean,
  apiConnectionTimeout: number,
  apiRequestTimeout: number,
  apiKeepAliveTimeout: number,
  apiBodyLimit: number,
  apiResponseValidation: boolean,

  jwtIssuer: string,
  jwtSecret: string,

  pwdHashCost: number,

  i18nFallbackLanguage: string,

  dbModule: string,
  dbMysqlHost: string,
  dbMysqlPort: number,
  dbMysqlUser: string,
  dbMysqlPassword: string,
  dbMysqlDatabase: string,
  dbMysqlSsl: boolean,
  dbMysqlSslCa: string,
  dbMysqlSslCert: string,
  dbMysqlSslKey: string,
  dbMysqlSslVerify: boolean,
  dbMysqlMaxConnection: number,
  dbPostgresHost: string,
  dbPostgresPort: number,
  dbPostgresUser: string,
  dbPostgresPassword: string,
  dbPostgresDatabase: string,
  dbPostgresSsl: boolean,
  dbPostgresSslCa: string,
  dbPostgresSslCert: string,
  dbPostgresSslKey: string,
  dbPostgresSslVerify: boolean,
  dbPostgresMaxConnection: number,
  dbSqliteFile: string,

  cacheModule: string,
  cacheRedisHost: string,
  cacheRedisPort: number,
  cacheRedisUser: string,
  cacheRedisPassword: string,
  cacheRedisPrefix: string,

  mqModule: string,
  mqRedisHost: string,
  mqRedisPort: number,
  mqRedisUser: string,
  mqRedisPassword: string,
  mqRedisPrefix: string,

  mailModule: string,
  mailSmtpHost: string,
  mailSmtpPort: number,
  mailSmtpUser: string,
  mailSmtpPassword: string,
  mailSmtpEmail: string,
}
