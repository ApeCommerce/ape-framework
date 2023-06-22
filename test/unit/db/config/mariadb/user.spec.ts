import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbUser: 'user',
  dbMariadbDatabase: 'database',
});

describe('Loading the config with a mariadb user', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        user: 'user',
        database: 'database',
      },
    });
  });
});
