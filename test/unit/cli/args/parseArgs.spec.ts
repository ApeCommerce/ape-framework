import { parseArgs } from 'cli/args/parseArgs'
import type { Args } from 'cli/args/Args'

describe('parsing the command line arguments', () => {
  test('returns expected value', async () => {
    expect(parseArgs([])).toStrictEqual<Args>({
      positional: [],
      options: {},
    })

    expect(parseArgs(['foo', '-abc'])).toStrictEqual<Args>({
      positional: ['foo'],
      options: { a: true, b: true, c: true },
    })

    expect(parseArgs(['foo', '--abc'])).toStrictEqual<Args>({
      positional: ['foo'],
      options: { abc: true },
    })

    expect(parseArgs(['foo', '--abc=1'])).toStrictEqual<Args>({
      positional: ['foo'],
      options: { abc: '1' },
    })

    expect(parseArgs(['foo', '--abc', '1'])).toStrictEqual<Args>({
      positional: ['foo'],
      options: { abc: '1' },
    })

    expect(parseArgs(['foo', '--abc-def=1'])).toStrictEqual<Args>({
      positional: ['foo'],
      options: { abcDef: '1' },
    })
  })
})
