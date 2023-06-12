import { getConfig } from '../config';

const config = getConfig();

if (!config.bootModule) throw new Error('Boot: module not provided');

export default {
  module: config.bootModule,
};
