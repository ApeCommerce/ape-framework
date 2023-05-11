import bytes from 'bytes';
import dotenv from 'dotenv';
import parseDuration from 'parse-duration';

export const parseBoolean = (s?: string) => s === '1';
export const parseBytes = (s?: string) => (s ? bytes(s) : 0);
export const parseMilliseconds = (s?: string) => (s ? parseDuration(s) : 0);
export const parseNumber = (s?: string) => Number(s) || 0;
export const parseSeconds = (s?: string) => (s ? Math.floor(parseDuration(s) / 1000) : 0);
export const parseString = (s?: string) => s || '';

dotenv.config();

export default {
  apiHost: parseString(process.env.API_HOST),
  apiPort: parseNumber(process.env.API_PORT),
  apiRandomPort: parseBoolean(process.env.API_RANDOM_PORT),
  apiConnectionTimeout: parseMilliseconds(process.env.API_CONNECTION_TIMEOUT),
  apiRequestTimeout: parseMilliseconds(process.env.API_REQUEST_TIMEOUT),
  apiKeepAliveTimeout: parseMilliseconds(process.env.API_KEEP_ALIVE_TIMEOUT),
  apiBodyLimit: parseBytes(process.env.API_BODY_LIMIT),
  apiResponseValidation: parseBoolean(process.env.API_RESPONSE_VALIDATION),

  jwtIssuer: parseString(process.env.JWT_ISSUER),
  jwtSecret: parseString(process.env.JWT_SECRET),

  pwdHashCost: parseNumber(process.env.PWD_HASH_COST),

  logLevel: parseString(process.env.LOG_LEVEL),
  logDestination: parseString(process.env.LOG_DESTINATION),
  logPretty: parseBoolean(process.env.LOG_PRETTY),
  logFile: parseString(process.env.LOG_FILE),

  dbModule: parseString(process.env.DB_MODULE),
  dbMariadbHost: parseString(process.env.DB_MARIADB_HOST),
  dbMariadbPort: parseNumber(process.env.DB_MARIADB_PORT),
  dbMariadbUser: parseString(process.env.DB_MARIADB_USER),
  dbMariadbPassword: parseString(process.env.DB_MARIADB_PASSWORD),
  dbMariadbDatabase: parseString(process.env.DB_MARIADB_DATABASE),
  dbMysqlHost: parseString(process.env.DB_MYSQL_HOST),
  dbMysqlPort: parseNumber(process.env.DB_MYSQL_PORT),
  dbMysqlUser: parseString(process.env.DB_MYSQL_USER),
  dbMysqlPassword: parseString(process.env.DB_MYSQL_PASSWORD),
  dbMysqlDatabase: parseString(process.env.DB_MYSQL_DATABASE),
  dbPostgresHost: parseString(process.env.DB_POSTGRES_HOST),
  dbPostgresPort: parseNumber(process.env.DB_POSTGRES_PORT),
  dbPostgresUser: parseString(process.env.DB_POSTGRES_USER),
  dbPostgresPassword: parseString(process.env.DB_POSTGRES_PASSWORD),
  dbPostgresDatabase: parseString(process.env.DB_POSTGRES_DATABASE),
  dbSqliteFile: parseString(process.env.DB_SQLITE_FILE),

  cacheModule: parseString(process.env.CACHE_MODULE),
  cacheRedisHost: parseString(process.env.CACHE_REDIS_HOST),
  cacheRedisPort: parseNumber(process.env.CACHE_REDIS_PORT),
  cacheRedisUser: parseString(process.env.CACHE_REDIS_USER),
  cacheRedisPassword: parseString(process.env.CACHE_REDIS_PASSWORD),
  cacheRedisPrefix: parseString(process.env.CACHE_REDIS_PREFIX),

  mqModule: parseString(process.env.MQ_MODULE),
  mqRedisHost: parseString(process.env.MQ_REDIS_HOST),
  mqRedisPort: parseNumber(process.env.MQ_REDIS_PORT),
  mqRedisUser: parseString(process.env.MQ_REDIS_USER),
  mqRedisPassword: parseString(process.env.MQ_REDIS_PASSWORD),
  mqRedisPrefix: parseString(process.env.MQ_REDIS_PREFIX),

  mailModule: parseString(process.env.MAIL_MODULE),
  mailSmtpHost: parseString(process.env.MAIL_SMTP_HOST),
  mailSmtpPort: parseNumber(process.env.MAIL_SMTP_PORT),
  mailSmtpUser: parseString(process.env.MAIL_SMTP_USER),
  mailSmtpPassword: parseString(process.env.MAIL_SMTP_PASSWORD),
  mailSmtpEmail: parseString(process.env.MAIL_SMTP_EMAIL),
};
