import config from '../config';

if (!config.pwdHashCost) { throw new Error('PWD: hash cost not provided'); }

export default {
  hashCost: config.pwdHashCost,
};
