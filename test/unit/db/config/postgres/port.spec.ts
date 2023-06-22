import { initConfig } from 'config';

initConfig({
  dbModule: 'postgres',
  dbPostgresHost: 'host',
  dbPostgresPort: 0,
  dbPostgresDatabase: 'database',
});

describe('Loading the config with missing postgres port', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
