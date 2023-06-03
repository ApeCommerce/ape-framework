import { initConfig } from 'config';
import { loadModule } from 'utils';

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
});

describe('Loading the config', () => {
  test('Returns expected options', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.options).toStrictEqual({
      level: 'silent',
    });
  });
});
