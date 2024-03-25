import { ParserInputError } from 'parser/error/ParserInputError'

describe('creating a parser input error', () => {
  test('returns expected value', async () => {
    const error = new ParserInputError('TYPE')
    expect(error.message).toBe('failed parsing TYPE: invalid input')
  })
})
