import env from 'env';

if (!env.jwtIssuer) { throw new Error('JWT: issuer not provided'); }
if (!env.jwtSecret) { throw new Error('JWT: secret not provided'); }

export default {
  issuer: env.jwtIssuer,
  secret: env.jwtSecret,
};
