import { getConfig } from 'config';

describe('Getting the config multiple times', () => {
  test('Returns expected value', async () => {
    const config1 = getConfig();
    const config2 = getConfig();
    const config3 = getConfig();
    expect(config1).toBe(config2);
    expect(config1).toBe(config3);
  });
});
