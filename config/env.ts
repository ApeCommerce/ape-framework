import dotenv from 'dotenv';

dotenv.config();

export default {
  bootModule: process.env.APE_BOOT_MODULE,

  apiName: process.env.APE_API_NAME,
  apiVersion: process.env.APE_API_VERSION,
  apiHost: process.env.APE_API_HOST,
  apiPort: process.env.APE_API_PORT,
  apiRandomPort: process.env.APE_API_RANDOM_PORT,
  apiConnectionTimeout: process.env.APE_API_CONNECTION_TIMEOUT,
  apiRequestTimeout: process.env.APE_API_REQUEST_TIMEOUT,
  apiKeepAliveTimeout: process.env.APE_API_KEEP_ALIVE_TIMEOUT,
  apiBodyLimit: process.env.APE_API_BODY_LIMIT,
  apiResponseValidation: process.env.APE_API_RESPONSE_VALIDATION,

  jwtIssuer: process.env.APE_JWT_ISSUER,
  jwtSecret: process.env.APE_JWT_SECRET,

  pwdHashCost: process.env.APE_PWD_HASH_COST,

  i18nFallbackLanguage: process.env.APE_I18N_FALLBACK_LANGUAGE,

  logLevel: process.env.APE_LOG_LEVEL,
  logDestination: process.env.APE_LOG_DESTINATION,
  logPretty: process.env.APE_LOG_PRETTY,
  logFile: process.env.APE_LOG_FILE,

  dbModule: process.env.APE_DB_MODULE,
  dbMariadbHost: process.env.APE_DB_MARIADB_HOST,
  dbMariadbPort: process.env.APE_DB_MARIADB_PORT,
  dbMariadbUser: process.env.APE_DB_MARIADB_USER,
  dbMariadbPassword: process.env.APE_DB_MARIADB_PASSWORD,
  dbMariadbDatabase: process.env.APE_DB_MARIADB_DATABASE,
  dbMysqlHost: process.env.APE_DB_MYSQL_HOST,
  dbMysqlPort: process.env.APE_DB_MYSQL_PORT,
  dbMysqlUser: process.env.APE_DB_MYSQL_USER,
  dbMysqlPassword: process.env.APE_DB_MYSQL_PASSWORD,
  dbMysqlDatabase: process.env.APE_DB_MYSQL_DATABASE,
  dbPostgresHost: process.env.APE_DB_POSTGRES_HOST,
  dbPostgresPort: process.env.APE_DB_POSTGRES_PORT,
  dbPostgresUser: process.env.APE_DB_POSTGRES_USER,
  dbPostgresPassword: process.env.APE_DB_POSTGRES_PASSWORD,
  dbPostgresDatabase: process.env.APE_DB_POSTGRES_DATABASE,
  dbSqliteFile: process.env.APE_DB_SQLITE_FILE,

  cacheModule: process.env.APE_CACHE_MODULE,
  cacheRedisHost: process.env.APE_CACHE_REDIS_HOST,
  cacheRedisPort: process.env.APE_CACHE_REDIS_PORT,
  cacheRedisUser: process.env.APE_CACHE_REDIS_USER,
  cacheRedisPassword: process.env.APE_CACHE_REDIS_PASSWORD,
  cacheRedisPrefix: process.env.APE_CACHE_REDIS_PREFIX,

  mqModule: process.env.APE_MQ_MODULE,
  mqRedisHost: process.env.APE_MQ_REDIS_HOST,
  mqRedisPort: process.env.APE_MQ_REDIS_PORT,
  mqRedisUser: process.env.APE_MQ_REDIS_USER,
  mqRedisPassword: process.env.APE_MQ_REDIS_PASSWORD,
  mqRedisPrefix: process.env.APE_MQ_REDIS_PREFIX,

  mailModule: process.env.APE_MAIL_MODULE,
  mailSmtpHost: process.env.APE_MAIL_SMTP_HOST,
  mailSmtpPort: process.env.APE_MAIL_SMTP_PORT,
  mailSmtpUser: process.env.APE_MAIL_SMTP_USER,
  mailSmtpPassword: process.env.APE_MAIL_SMTP_PASSWORD,
  mailSmtpEmail: process.env.APE_MAIL_SMTP_EMAIL,
};
