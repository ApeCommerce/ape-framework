import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logDestination: 'file',
  logFile: '',
  logLevel: 'error',
});

describe('Loading the config with missing file while destination is file', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
