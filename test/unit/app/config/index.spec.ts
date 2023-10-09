import { initConfig } from 'config';

initConfig({
  appBoot: '../test/fixture/boot',
});

describe('Loading the config', () => {
  test('Returns expected value', async () => {
    const config = (await import('app/config')).default;
    expect(config).toStrictEqual({
      boot: '../test/fixture/boot',
    });
  });
});
