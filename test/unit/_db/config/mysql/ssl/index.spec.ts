import { initConfig } from 'config';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 1000,
  dbMysqlDatabase: 'database',
  dbMysqlSsl: true,
});

describe('Loading the config with mysql ssl enabled', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          rejectUnauthorized: true,
        },
      },
      pool: {
        min: 0,
        max: 5,
      },
    });
  });
});
