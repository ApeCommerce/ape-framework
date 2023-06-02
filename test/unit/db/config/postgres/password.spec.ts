import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresPassword: 'password',
  dbPostgresDatabase: 'database',
});

describe('Loading the config with a postgres password', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
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
