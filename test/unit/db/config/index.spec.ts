import { initConfig } from 'config';

initConfig({
  dbModule: 'memory',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('db/config')).default;
    expect(config).toStrictEqual({
      client: 'sqlite3',
      connection: {
        filename: ':memory:',
      },
      useNullAsDefault: true,
    });
  });
});
