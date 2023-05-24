import { getConfig } from '../config';

const config = getConfig();

if (!config.bootModule) throw new Error('Boot: boot module not provided');

export default {
  bootModule: config.bootModule,
};
