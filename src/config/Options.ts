import type { Args } from '../cli/Args'
import type { Env } from '../env/Env'

interface Options {
  file?: {
    path: string,
    required?: boolean,
  },
  env?: Env,
  args?: Args,
}

export {
  type Options,
}
