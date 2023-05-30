import { initConfig } from 'config';

initConfig({
  bootModule: 'test/fixture/boot',
  i18nFallbackLanguage: 'en',
  jwtIssuer: 'foo',
  jwtSecret: 'secret',
  logDestination: 'stdout',
  logFile: '',
  logLevel: 'silent',
  logPretty: false,
  pwdHashCost: 3,
});
