import { initConfig } from 'config';
import { Socket } from 'net';

initConfig({
  logLevel: 'silent',
  logDestination: 'stdout',
});

describe('Loading the config with stdout destination', () => {
  test('Returns expected stream', async () => {
    const config: any = (await import('log/config')).default;
    expect(config.stream).toBeInstanceOf(Socket);
  });
});
