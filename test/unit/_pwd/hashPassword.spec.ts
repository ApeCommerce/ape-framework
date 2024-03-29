import '../config'
import { hashPassword } from 'pwd'

describe('Hashing a password', () => {
  test('Returns expected value', async () => {
    const hash = await hashPassword('password')
    expect(hash).toMatch(/^.+$/)
  })
})

describe('Hashing a password multiple times', () => {
  test('Returns expected value', async () => {
    const hash1 = await hashPassword('password')
    const hash2 = await hashPassword('password')
    const hash3 = await hashPassword('password')
    expect(hash1).not.toEqual(hash2)
    expect(hash1).not.toEqual(hash3)
  })
})
