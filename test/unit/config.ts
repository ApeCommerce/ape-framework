import { initConfig } from 'config';

initConfig({
  jwtIssuer: 'foo',
  jwtSecret: 'secret',
  logDestination: 'file',
  logFile: 'log.txt',
  logLevel: 'error',
  logPretty: false,
  pwdHashCost: 3,
});
