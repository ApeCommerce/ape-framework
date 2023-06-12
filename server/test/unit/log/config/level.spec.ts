import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logLevel: 'oops',
  logDestination: 'stdout',
});

describe('Loading the config with invalid level', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});