import config from '../config';

if (!config.bootModule) throw new Error('Boot: boot module not provided');

export default {
  bootModule: config.bootModule,
};
