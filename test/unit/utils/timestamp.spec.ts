import { parseMilliseconds, timestamp, wait } from 'utils';

describe('Getting a timestamp', () => {
  test('Returns expected value', async () => {
    const ts = timestamp();
    expect(ts).toBeGreaterThan(0);
    expect(ts).toBeLessThanOrEqual(Date.now() / 1000);
  });
});

describe('Getting a timestamp multiple times', () => {
  test('Returns expected value', async () => {
    const ts1 = timestamp();
    await wait(parseMilliseconds('1s'));
    const ts2 = timestamp();
    await wait(parseMilliseconds('1s'));
    const ts3 = timestamp();
    expect(ts1).toBeLessThan(ts2);
    expect(ts2).toBeLessThan(ts3);
  });
});
