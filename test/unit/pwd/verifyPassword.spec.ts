import '../config';
import { hashPassword, verifyPassword } from 'pwd';

describe('Verifying a password', () => {
  test('Returns expected value', async () => {
    const hash = await hashPassword('password');
    expect(await verifyPassword('password', hash)).toBe(true);
    expect(await verifyPassword('oops', hash)).toBe(false);
  });
});
