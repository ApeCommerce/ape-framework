import { initConfig } from 'config'

initConfig({
  appBoot: '../test/fixture/boot',

  logLevel: 'silent',

  apiName: 'TEST Ape Project',
  apiVersion: '0.0.0-test',
  apiRandomPort: true,
  apiConnectionTimeout: 0,
  apiRequestTimeout: 0,
  apiKeepAliveTimeout: 0,
  apiBodyLimit: 0,
  apiResponseValidation: true,

  jwtIssuer: 'issuer',
  jwtSecret: 'secret',

  pwdHashCost: 3,

  dbModule: 'memory',
})
