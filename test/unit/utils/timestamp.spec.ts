import { timestamp } from 'utils';

describe('Getting a timestamp', () => {
  test('Returns a valid value', async () => {
    const ts = timestamp();
    expect(ts).toBeGreaterThan(0);
    expect(ts).toBeLessThanOrEqual(Date.now() / 1000);
  });
});
