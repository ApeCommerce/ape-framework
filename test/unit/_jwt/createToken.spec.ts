import '../config'
import { createToken, User } from 'jwt'
import { parseSeconds, timestamp } from 'utils'

const user: User = { userId: 'foo', roles: ['one', 'two'] }
const type = 'authorization'

describe('Creating a token', () => {
  test('Returns expected value', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'))
    expect(token).toMatch(/^[0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/)
  })
})

describe('Creating a token multiple times', () => {
  test('Returns expected value', async () => {
    const ts = timestamp()
    const token1 = await createToken(user, type, ts, parseSeconds('1s'))
    const token2 = await createToken(user, type, ts + 1, parseSeconds('1s'))
    const token3 = await createToken(user, type, ts + 2, parseSeconds('1s'))
    expect(token1).not.toEqual(token2)
    expect(token1).not.toEqual(token3)
  })
})
