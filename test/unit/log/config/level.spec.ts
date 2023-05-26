import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logDestination: 'stdout',
  logLevel: 'xxx',
});

describe('Loading the config with invalid level', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
