import { wait } from 'utils'

describe('waiting a duration', () => {
  test('delays code execution', async () => {
    const timestamp = Date.now()
    const duration = 1000
    await wait(duration)
    expect(Date.now()).toBeGreaterThanOrEqual(timestamp + duration)
  })
})
