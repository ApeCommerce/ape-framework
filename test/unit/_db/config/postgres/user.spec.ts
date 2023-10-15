import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresUser: 'user',
  dbPostgresDatabase: 'database',
});

describe('Loading the config with a postgres user', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'pg',
      connection: {
        host: 'host',
        port: 1000,
        user: 'user',
        database: 'database',
      },
      pool: {
        min: 0,
        max: 5,
      },
    });
  });
});
