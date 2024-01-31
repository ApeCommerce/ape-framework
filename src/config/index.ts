import type { Config } from './Config'
import type { Params } from './Params'

const loadConfig = <T extends Config>(params: Params<T>): T => {
  const config: Config = {}
  for (const property in params) {
    config[property] = params[property].parser(true)
  }
  return config as T
}

export {
  loadConfig,
}
