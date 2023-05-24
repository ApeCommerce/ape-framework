import { initConfig } from 'config';
import config from 'pwd/config';

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    initConfig();
    expect(config).toStrictEqual({
      hashCost: 10,
    });
  });
});
