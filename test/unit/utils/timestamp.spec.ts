import { parseMilliseconds, timestamp, wait } from 'utils';

describe('Getting a timestamp', () => {
  test('Returns a valid value', async () => {
    const ts = timestamp();
    expect(ts).toBeGreaterThan(0);
    expect(ts).toBeLessThanOrEqual(Date.now() / 1000);
  });
});

describe('Getting multiple timestamps', () => {
  test('Returns increasing values', async () => {
    const ts1 = timestamp();
    await wait(parseMilliseconds('1s'));
    const ts2 = timestamp();
    expect(ts2).toBeGreaterThan(ts1);
  });
});
