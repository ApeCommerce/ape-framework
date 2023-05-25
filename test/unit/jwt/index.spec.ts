import 'test/config/unit';
import { createToken, hasRoles, verifyToken, Auth } from 'jwt';
import { parseMilliseconds, timestamp, wait } from 'utils';

describe('Creating a token', () => {
  test('Returns a valid value', async () => {
    const token = createToken({ id: 'foo', roles: ['one', 'two'] }, 'auth', 3, timestamp());
    expect(token).toMatch(/^[0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/);
  });
});

describe('Creating a token multiple times', () => {
  test('Returns different values', async () => {
    const token1 = createToken({ id: 'foo', roles: ['one', 'two'] }, 'auth', 3, timestamp());
    await wait(parseMilliseconds('1s'));
    const token2 = createToken({ id: 'foo', roles: ['one', 'two'] }, 'auth', 3, timestamp());
    await wait(parseMilliseconds('1s'));
    const token3 = createToken({ id: 'foo', roles: ['one', 'two'] }, 'auth', 3, timestamp());
    expect(token1).not.toEqual(token2);
    expect(token2).not.toEqual(token3);
    expect(token3).not.toEqual(token1);
  });
});

describe('Verifying a token', () => {
  test('Returns expected value', async () => {
    const token = createToken({ id: 'foo', roles: ['one', 'two'] }, 'auth', 3, timestamp());
    expect(verifyToken(token, 'auth', timestamp())).toStrictEqual({ id: 'foo', roles: ['one', 'two'] });
  });
});
