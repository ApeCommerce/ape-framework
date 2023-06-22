import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: 'host',
  dbMariadbPort: 0,
  dbMariadbDatabase: 'database',
});

describe('Loading the config with missing mariadb port', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
