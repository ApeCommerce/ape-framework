import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  dbModule: 'memory',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('db/config');
    expect(config).toStrictEqual({
      client: 'sqlite3',
      connection: {
        filename: ':memory:',
      },
      useNullAsDefault: true,
    });
  });
});
