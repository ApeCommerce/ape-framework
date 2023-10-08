import { initConfig } from 'config';

initConfig({
  bootModule: '../test/fixture/boot',

  logLevel: 'debug',
  logDestination: 'file',
});
