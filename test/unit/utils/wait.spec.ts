import { wait } from 'utils/wait'

describe('waiting a duration', () => {
  test('produces expected result', async () => {
    const timestamp = Date.now()
    const duration = 1000
    await wait(duration)
    expect(Date.now()).toBeGreaterThanOrEqual(timestamp + duration)
  })
})
