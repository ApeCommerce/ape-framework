import { initConfig } from 'config';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 1000,
  dbMysqlPassword: 'password',
  dbMysqlDatabase: 'database',
});

describe('Loading the config with a mysql password', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        password: 'password',
        database: 'database',
      },
    });
  });
});
