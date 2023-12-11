export const tokenType = 'authorization'
export const headerRegex = /^Bearer [0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/
export const bearerPrefix = 'Bearer '

export default {
  bearerPrefix,
  headerRegex,
  tokenType,
}
