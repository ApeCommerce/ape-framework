import { parseJsonFile } from 'framework/utils';

const json = parseJsonFile('ape.config.json');

const config = {
  apiName: String(json.apiName),
  apiVersion: String(json.apiVersion),
  bootModule: String(json.bootModule),
};

if (!config.apiName) { throw new Error('Config: api name not provided'); }
if (!config.apiVersion) { throw new Error('Config: api version not provided'); }
if (!config.bootModule) { throw new Error('Config: boot module not provided'); }

export default config;
