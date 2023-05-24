import { wait } from 'utils';

describe('Waiting', () => {
  test('Delays execution by required duration', async () => {
    const ms = Date.now();
    await wait(100);
    expect(Date.now() - ms).toBeGreaterThanOrEqual(100);
  });
});
