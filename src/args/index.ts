import parse from 'yargs-parser'
import type { Args } from './Args'

const parsed = parse(
  process.argv.slice(2),
  {
    configuration: {
      'boolean-negation': false,
      'dot-notation': false,
      'duplicate-arguments-array': false,
      'flatten-duplicate-arrays': false,
      'greedy-arrays': false,
      'parse-numbers': false,
      'parse-positional-numbers': false,
      'strip-dashed': true,
    },
  },
)

const positional: Record<string, any> = parsed._

const optional: Record<string, any> = parsed

delete optional._

const args: Args = {
  positional,
  optional,
}

export {
  args,
}
