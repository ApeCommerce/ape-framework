import { initConfig } from 'config';

describe('Initializing the config multiple times', () => {
  test('Returns a different instance', async () => {
    const config1 = initConfig();
    const config2 = initConfig();
    const config3 = initConfig();
    expect(config1).not.toBe(config2);
    expect(config2).not.toBe(config3);
    expect(config3).not.toBe(config1);
  });
});
