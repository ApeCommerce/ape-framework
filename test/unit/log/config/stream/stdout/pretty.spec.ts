import 'test/unit/config';
import { initConfig } from 'config';
import { loadModule } from 'utils';
import { Transform } from 'stream';

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
  logPretty: true,
});

describe('Loading the config with stdout destination and pretty enabled', () => {
  test('Returns expected stream', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.stream).toBeInstanceOf(Transform);
  });
});
