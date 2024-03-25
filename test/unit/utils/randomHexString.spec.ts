import { randomHexString } from 'utils/randomHexString'

describe('generating a random hexadecimal string', () => {
  test('returns expected value', async () => {
    expect(randomHexString(0)).toBe('')
    expect(randomHexString(5)).toMatch(/^[0-9a-f]{5}$/u)
    expect(randomHexString(10)).toMatch(/^[0-9a-f]{10}$/u)
  })
})

describe('generating a random hexadecimal string several times', () => {
  test('returns expected value', async () => {
    const hex1 = randomHexString(5)
    const hex2 = randomHexString(5)
    const hex3 = randomHexString(5)
    expect(hex1).not.toStrictEqual(hex2)
    expect(hex2).not.toStrictEqual(hex3)
  })
})
