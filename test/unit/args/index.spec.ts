import parse from 'yargs-parser'

describe('doing some testing', () => {
  test('is cool', async () => {
    const args = parse(process.argv.slice(2))

    expect(args).toBeDefined()
  })
})
