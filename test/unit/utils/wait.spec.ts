import { wait } from 'utils'

describe('Waiting a duration', () => {
  test('Produces expected result', async () => {
    const duration = 1000
    const timestamp = Date.now()
    await wait(duration)
    expect(Date.now() - timestamp).toBeGreaterThanOrEqual(duration)
  })
})
