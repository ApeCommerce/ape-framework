import { initConfig } from 'config';
import { loadModule } from 'utils';
import { Socket } from 'net';

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
});

describe('Loading the config with stdout destination', () => {
  test('Returns expected stream', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.stream).toBeInstanceOf(Socket);
  });
});
