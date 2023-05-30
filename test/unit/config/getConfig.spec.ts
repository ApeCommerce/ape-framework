import 'test/unit/config';
import { getConfig } from 'config';

describe('Getting the config multiple times', () => {
  test('Returns the same instance', async () => {
    const config1 = getConfig();
    const config2 = getConfig();
    const config3 = getConfig();
    expect(config1).toBe(config2);
    expect(config2).toBe(config3);
    expect(config3).toBe(config1);
  });
});
