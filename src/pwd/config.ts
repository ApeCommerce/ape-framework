import env from 'framework/env';

export default {
  hashCost: env.pwdHashCost || 10,
};
