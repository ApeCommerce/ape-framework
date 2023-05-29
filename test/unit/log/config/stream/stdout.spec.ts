import 'test/unit/config';
import { initConfig } from 'config';
import { loadModule } from 'utils';
import { Socket } from 'net';

initConfig({
  logDestination: 'stdout',
  logLevel: 'silent',
});

describe('Loading the config with stdout destination', () => {
  test('Returns expected stream', async () => {
    const config = await loadModule<any>('log/config');
    expect(config.stream).toBeInstanceOf(Socket);
  });
});