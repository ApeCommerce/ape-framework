import 'test/config/unit';
import { hashPassword, verifyPassword } from 'pwd';

describe('Hashing a password', () => {
  test('Returns a valid value', async () => {
    const hash = await hashPassword('password');
    expect(hash).toMatch(/^.+$/);
  });
});

describe('Hashing a password multiple times', () => {
  test('Returns different values', async () => {
    const hash1 = await hashPassword('password');
    const hash2 = await hashPassword('password');
    const hash3 = await hashPassword('password');
    expect(hash1).not.toEqual(hash2);
    expect(hash2).not.toEqual(hash3);
    expect(hash3).not.toEqual(hash1);
  });
});

describe('Verifying a matching password', () => {
  test('Succeeds', async () => {
    const hash = await hashPassword('password');
    expect(await verifyPassword('password', hash)).toBe(true);
    expect(await verifyPassword('xxx', hash)).toBe(false);
  });
});

// describe('Verifying a matching password', () => {
//   test('Succeeds', async () => {
//     const hash = await hashPassword('password');
//     expect(await verifyPassword('password', hash)).toBe(true);
//     expect(await verifyPassword('xxx', hash)).toBe(false);
//   });
// });
