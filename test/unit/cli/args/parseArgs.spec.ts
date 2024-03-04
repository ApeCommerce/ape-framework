import { parseArgs } from 'cli/args/parseArgs'
import type { Args } from 'cli/args/Args'

describe('parsing the command line arguments', () => {
  test('returns expected value', async () => {
    expect(
      parseArgs([]),
    ).toStrictEqual<Args>({
      positional: [],
      options: {},
    })

    expect(
      parseArgs(['foo', '--one', '1', 'bar', '--two', '2', '-x', '-y', '-z']),
    ).toStrictEqual<Args>({
      positional: ['foo', 'bar'],
      options: { one: '1', two: '2', x: true, y: true, z: true },
    })

    expect(
      parseArgs(['foo', '--one=1', 'bar', '--two=2', '-xyz']),
    ).toStrictEqual<Args>({
      positional: ['foo', 'bar'],
      options: { one: '1', two: '2', x: true, y: true, z: true },
    })

    expect(
      parseArgs(['foo', '--one-two', '3', 'bar', '-x', 'baz']),
    ).toStrictEqual<Args>({
      positional: ['foo', 'bar'],
      options: { oneTwo: '3', x: 'baz' },
    })
  })
})
