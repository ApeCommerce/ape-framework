import { parseMilliseconds, wait } from 'utils';

describe('Waiting a duration', () => {
  test('Delays code execution', async () => {
    const ms = Date.now();
    await wait(parseMilliseconds('1s'));
    expect(Date.now() - ms).toBeGreaterThan(parseMilliseconds('1s'));
  });
});
