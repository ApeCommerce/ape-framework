import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 1000,
  dbPostgresDatabase: '',
});

describe('Loading the config with missing postgres database', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
