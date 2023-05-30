import 'test/unit/config';
import { initConfig } from 'config';
import { loadModule } from 'utils';
import { SonicBoom } from 'sonic-boom';

initConfig({
  logDestination: 'file',
  logFile: 'log.txt',
  logLevel: 'silent',
  logPretty: true,
});

describe('Loading the config with pretty enabled while destination is file', () => {
  test('Returns expected stream', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.stream).toBeInstanceOf(SonicBoom);
  });
});
