import { timestamp } from 'utils/timestamp'
import { wait } from 'utils/wait'

describe('getting a timestamp', () => {
  test('returns expected value', async () => {
    const ts = timestamp()
    const now = Date.now() / 1000
    expect(ts).toBeGreaterThan(0)
    expect(ts).toBeLessThanOrEqual(now)
  })
})

describe('getting a timestamp several times', () => {
  test('returns expected value', async () => {
    const duration = 1000
    const ts1 = timestamp()
    await wait(duration)
    const ts2 = timestamp()
    await wait(duration)
    const ts3 = timestamp()
    expect(ts1).toBeLessThan(ts2)
    expect(ts2).toBeLessThan(ts3)
  })
})
