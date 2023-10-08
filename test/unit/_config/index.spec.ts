import { getConfig, initConfig } from 'config';

describe('Initializing and getting the config', () => {
  test('Returns the same instance', async () => {
    const config1 = initConfig();
    const config2 = getConfig();
    const config3 = getConfig();
    expect(config1).toBe(config2);
    expect(config1).toBe(config3);
  });
});
