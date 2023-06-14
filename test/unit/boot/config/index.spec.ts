import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  bootModule: 'test/fixture/boot',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = await loadModule('boot/config');
    expect(config).toStrictEqual({
      module: 'test/fixture/boot',
    });
  });
});
