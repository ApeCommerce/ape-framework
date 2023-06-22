import { initConfig } from 'config';

initConfig({
  dbModule: 'mariadb',
  dbMariadbHost: '',
  dbMariadbPort: 3306,
  dbMariadbDatabase: 'database',
});

describe('Loading the config with missing mariadb host', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('db/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
