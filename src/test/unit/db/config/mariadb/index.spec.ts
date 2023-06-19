import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbDatabase: 'database',
});

describe('Loading the config with mariadb module', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
      },
    });
  });
});
