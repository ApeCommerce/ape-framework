import { initConfig } from 'config';

initConfig({
  i18nFallbackLanguage: 'en',
  jwtIssuer: 'foo',
  jwtSecret: 'secret',
  logDestination: 'stdout',
  logFile: '',
  logLevel: 'silent',
  logPretty: false,
  pwdHashCost: 3,
});
