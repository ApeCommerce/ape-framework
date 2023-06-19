export const authorizationTokenType = 'authorization';
export const authorizationRegex = /^Bearer [0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/;
export const bearerPrefixLength = 'Bearer '.length;

export default {
  authorizationTokenType,
  authorizationRegex,
  bearerPrefixLength,
};
