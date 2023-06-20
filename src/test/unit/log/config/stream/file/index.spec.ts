import { initConfig } from 'config';
import { SonicBoom } from 'sonic-boom';

initConfig({
  logLevel: 'silent',
  logDestination: 'file',
  logFile: 'ape.log',
});

describe('Loading the config with file destination', () => {
  test('Returns expected stream', async () => {
    const config: any = (await import('log/config')).default;
    expect(config.stream).toBeInstanceOf(SonicBoom);
  });
});
