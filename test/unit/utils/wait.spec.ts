import { wait } from 'utils';

describe('Waiting a duration', () => {
  test('Delays code execution by that duration', async () => {
    const ms = Date.now();
    await wait(30);
    expect(Date.now() - ms).toBeGreaterThanOrEqual(30);
  });
});
