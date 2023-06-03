import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logLevel: 'silent',
  logDestination: 'oops',
});

describe('Loading the config with invalid destination', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
