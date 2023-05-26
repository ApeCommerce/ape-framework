import { initConfig } from 'config';

initConfig({
  jwtIssuer: 'foo',
  jwtSecret: 'secret',
  logDestination: 'stdout',
  logFile: '',
  logLevel: 'silent',
  logPretty: false,
  pwdHashCost: 3,
});
