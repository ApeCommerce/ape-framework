import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
});

describe('Loading the config with postgres module', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'pg',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
      },
      pool: {
        min: 0,
        max: 5,
      },
    });
  });
});
