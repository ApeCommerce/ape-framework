import env from 'env';

export default {
  hashCost: env.pwdHashCost || 10,
};
