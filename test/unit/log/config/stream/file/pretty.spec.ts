import { initConfig } from 'config';
import { SonicBoom } from 'sonic-boom';

initConfig({
  logLevel: 'silent',
  logDestination: 'file',
  logPretty: true,
  logFile: 'ape.log',
});

describe('Loading the config with file destination and pretty enabled', () => {
  test('Returns expected stream', async () => {
    const config: any = (await import('log/config')).default;
    expect(config.stream).toBeInstanceOf(SonicBoom);
  });
});
