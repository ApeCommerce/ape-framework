import { parseArgs } from './parseArgs'
import type { Args } from './Args'

const getArgs = (): Args => {
  return parseArgs(process.argv.slice(2))
}

export {
  getArgs,
}
