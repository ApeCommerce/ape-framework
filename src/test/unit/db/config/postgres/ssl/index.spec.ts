import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: 'database',
  dbPostgresSsl: true,
});

describe('Loading the config with postgres ssl enabled', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'pg',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          rejectUnauthorized: true,
        },
      },
    });
  });
});
