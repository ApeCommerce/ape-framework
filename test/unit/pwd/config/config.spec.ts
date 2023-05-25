import { loadModule } from 'utils';

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('pwd/config');
    expect(config).toStrictEqual({
      hashCost: 10,
    });
  });
});
