import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logLevel: 'silent',
  logDestination: 'file',
  logFile: '',
});

describe('Loading the config with missing file while destination is file', () => {
  test('Throws an error', async () => {
    expect.hasAssertions();
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});