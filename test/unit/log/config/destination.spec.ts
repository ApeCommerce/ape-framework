import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logDestination: 'xxx',
  logLevel: 'silent',
});

describe('Loading the config with invalid destination', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('log/config');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
