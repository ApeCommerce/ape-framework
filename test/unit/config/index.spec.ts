import 'test/unit/config';
import { getConfig, initConfig } from 'config';

describe('Initializing the config', () => {
  test('Resets the config', async () => {
    const config1 = getConfig();
    const config2 = initConfig();
    const config3 = getConfig();
    expect(config1).not.toBe(config2);
    expect(config2).toBe(config3);
    expect(config3).not.toBe(config1);
  });
});
