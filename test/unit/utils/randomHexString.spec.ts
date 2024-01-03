import { randomHexString } from 'utils'

describe('Getting a random hex string', () => {
  test('Returns expected value', async () => {
    expect(randomHexString(0)).toBe('')
    expect(randomHexString(5)).toMatch(/^[0-9a-f]{5}$/u)
    expect(randomHexString(10)).toMatch(/^[0-9a-f]{10}$/u)
  })
})

describe('Getting a random hex string multiple times', () => {
  test('Returns expected value', async () => {
    const hex1 = randomHexString(5)
    const hex2 = randomHexString(5)
    const hex3 = randomHexString(5)
    expect(hex1).not.toStrictEqual(hex2)
    expect(hex2).not.toStrictEqual(hex3)
  })
})
