import { parseMilliseconds, timestamp, wait } from 'utils';

describe('Getting a timestamp', () => {
  test('Returns a valid value', async () => {
    const ts = timestamp();
    expect(ts).toBeGreaterThan(0);
    expect(ts).toBeLessThanOrEqual(Date.now() / 1000);
  });
});

describe('Getting a timestamp at different times', () => {
  test('Returns increasing values', async () => {
    const ts1 = timestamp();
    await wait(parseMilliseconds('1s'));
    const ts2 = timestamp();
    await wait(parseMilliseconds('1s'));
    const ts3 = timestamp();
    expect(ts1).toBeLessThan(ts2);
    expect(ts2).toBeLessThan(ts3);
  });
});
