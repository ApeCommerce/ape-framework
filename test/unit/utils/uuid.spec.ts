import { uuid } from 'utils'

describe('Getting a UUID', () => {
  test('Returns expected value', async () => {
    const id = uuid()
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)
  })
})

describe('Getting a UUID multiple times', () => {
  test('Returns expected value', async () => {
    const id1 = uuid()
    const id2 = uuid()
    const id3 = uuid()
    expect(id1).not.toEqual(id2)
    expect(id1).not.toEqual(id3)
  })
})
