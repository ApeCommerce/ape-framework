import { initConfig } from 'config';

initConfig({
  logLevel: 'oops',
  logDestination: 'stdout',
});

describe('Loading the config with invalid level', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await import('log/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
