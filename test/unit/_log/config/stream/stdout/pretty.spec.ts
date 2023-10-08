import { initConfig } from 'config';
import { Transform } from 'stream';

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
  logPretty: true,
});

describe('Loading the config with stdout destination and pretty enabled', () => {
  test('Returns expected value', async () => {
    const config: any = (await import('log/config')).default;
    expect(config.stream).toBeInstanceOf(Transform);
  });
});
