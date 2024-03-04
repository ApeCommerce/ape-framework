import yargsParser from 'yargs-parser'
import type { Args } from './Args'

const parseArgs = (args: string[]): Args => {
  const parsed = yargsParser(args, {
    configuration: {
      'boolean-negation': false,
      'camel-case-expansion': true,
      'dot-notation': false,
      'duplicate-arguments-array': false,
      'flatten-duplicate-arrays': false,
      'greedy-arrays': false,
      'parse-numbers': false,
      'parse-positional-numbers': false,
      'short-option-groups': true,
      'strip-dashed': true,
    },
  })
  const positional: Record<string, any> = parsed._
  const options: Record<string, any> = parsed
  delete options._
  return {
    positional,
    options,
  }
}

export {
  parseArgs,
}
