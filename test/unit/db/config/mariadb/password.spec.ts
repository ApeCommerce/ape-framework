import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbPassword: 'password',
  dbMariadbDatabase: 'database',
});

describe('Loading the config with a mariadb password', () => {
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
