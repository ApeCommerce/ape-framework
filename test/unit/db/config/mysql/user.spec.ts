import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'mysql',
  dbMysqlHost: 'host',
  dbMysqlPort: 1000,
  dbMysqlUser: 'user',
  dbMysqlDatabase: 'database',
});

describe('Loading the config with a mysql user', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
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
