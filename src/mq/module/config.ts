import { getConfig } from '../../config'

const config = getConfig()

enum Module {
  bypass = 'bypass',
  redis = 'redis',
}

export const module = Object.values(Module)
  .find((module: string) => module === config.mqModule)
if (!module) throw new Error(`mq: invalid module "${config.mqModule}"`)

export default module
