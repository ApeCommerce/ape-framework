import { getConfig } from '../config'

const config = getConfig()

if (!config.jwtIssuer) throw new Error('jwt: issuer not provided')
if (!config.jwtSecret) throw new Error('jwt: secret not provided')

export default {
  issuer: config.jwtIssuer,
  secret: config.jwtSecret,
}
