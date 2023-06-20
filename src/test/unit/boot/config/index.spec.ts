import { initConfig } from 'config';

initConfig({
  bootModule: 'test/fixture/boot',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('boot/config')).default;
    expect(config).toStrictEqual({
      module: 'test/fixture/boot',
    });
  });
});
