import { getConfig } from '../config';

const config = getConfig();

if (!config.appBoot) throw new Error('App: boot not provided');

export default {
  boot: config.appBoot,
};
