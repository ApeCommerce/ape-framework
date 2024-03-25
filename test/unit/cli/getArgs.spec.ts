import { getArgs } from 'cli/getArgs'

process.argv = [...process.argv, 'foo', '--bar', '3']

describe('getting the command line arguments', () => {
  test('returns expected value', async () => {
    const args = getArgs()
    expect(args.positional).toContain('foo')
    expect(args.options.bar).toBe('3')
  })
})
