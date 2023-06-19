import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 1000,
  dbMariadbDatabase: 'database',
  dbMariadbSsl: true,
  dbMariadbSslVerify: false,
});

describe('Loading the config with mariadb ssl verify disabled', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
    expect(config).toStrictEqual({
      client: 'mysql2',
      connection: {
        host: 'host',
        port: 1000,
        database: 'database',
        ssl: {
          rejectUnauthorized: false,
        },
      },
    });
  });
});
