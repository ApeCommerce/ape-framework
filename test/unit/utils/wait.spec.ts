import { wait } from 'utils';

describe('Waiting a duration', () => {
  test('Delays code execution', async () => {
    const ms = Date.now();
    await wait(100);
    expect(Date.now() - ms).toBeGreaterThanOrEqual(100);
  });
});
