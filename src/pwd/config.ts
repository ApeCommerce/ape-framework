import { getConfig } from '../config';

const config = getConfig();

if (!config.pwdHashCost) throw new Error('pwd: hash cost not provided');

export default {
  hashCost: config.pwdHashCost,
};
