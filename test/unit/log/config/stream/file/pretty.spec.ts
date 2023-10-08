import { initConfig } from 'config';
import { SonicBoom } from 'sonic-boom';

initConfig({
  logLevel: 'silent',
  logDestination: 'file',
  logPretty: true,
  logFile: 'ape.log',
});

describe('Loading the config with file as destination and pretty enabled', () => {
  test('Returns expected value', async () => {
    const config: any = (await import('log/config')).default;
    expect(config.stream).toBeInstanceOf(SonicBoom);
  });
});
