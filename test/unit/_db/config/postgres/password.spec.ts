import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresPassword: 'password',
  dbPostgresDatabase: 'database',
});

describe('Loading the config with a postgres password', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'pg',
      connection: {
        host: 'host',
        port: 1000,
        password: 'password',
        database: 'database',
      },
    });
  });
});
