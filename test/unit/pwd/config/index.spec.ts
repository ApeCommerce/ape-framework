import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  pwdHashCost: 3,
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('pwd/config');
    expect(config).toStrictEqual({
      hashCost: 3,
    });
  });
});
