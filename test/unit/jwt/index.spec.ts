import 'test/config/unit';
import { createToken, hasRoles, verifyToken, Auth } from 'jwt';
import { parseMilliseconds, parseSeconds, timestamp, wait } from 'utils';

const auth: Auth = { id: 'foo', roles: ['one', 'two'] };
const type = 'authorization';
const expiration = parseSeconds('1s');

describe('Creating a token', () => {
  test('Returns a valid value', async () => {
    const token = createToken(auth, type, expiration, timestamp());
    expect(token).toMatch(/^[0-9A-Za-z]+\.[0-9A-Za-z]+\.[0-9A-Za-z-_]+$/);
  });
});

describe('Creating a token at different times', () => {
  test('Returns different values', async () => {
    const token1 = createToken(auth, type, expiration, timestamp());
    await wait(parseMilliseconds('1s'));
    const token2 = createToken(auth, type, expiration, timestamp());
    await wait(parseMilliseconds('1s'));
    const token3 = createToken(auth, type, expiration, timestamp());
    expect(token1).not.toEqual(token2);
    expect(token2).not.toEqual(token3);
    expect(token3).not.toEqual(token1);
  });
});

describe('Verifying a valid token', () => {
  test('Returns expected value', async () => {
    const token = createToken(auth, type, expiration, timestamp());
    const info = verifyToken(token, type, timestamp());
    expect(info).toStrictEqual(auth);
  });
});

describe('Verifying an invalid token', () => {
  test('Fails', async () => {
    expect(verifyToken('xxx', type, timestamp())).toBe(undefined);
  });
});

describe('Verifying an expired token', () => {
  test('Fails', async () => {
    const token = createToken(auth, type, expiration, timestamp());
    await wait(parseMilliseconds('1s'));
    expect(verifyToken(token, type, timestamp())).toBe(undefined);
  });
});

describe('Verifying a token that mismatches type', () => {
  test('Fails', async () => {
    const token = createToken(auth, type, expiration, timestamp());
    expect(verifyToken(token, 'xxx', timestamp())).toBe(undefined);
  });
});

describe('Checking roles', () => {
  test('Returns expected value', async () => {
    expect(hasRoles(auth, [])).toBe(true);
    expect(hasRoles(auth, ['one'])).toBe(true);
    expect(hasRoles(auth, ['two'])).toBe(true);
    expect(hasRoles(auth, ['one', 'two'])).toBe(true);

    expect(hasRoles(auth, [''])).toBe(false);
    expect(hasRoles(auth, ['foo'])).toBe(false);
    expect(hasRoles(auth, ['one', 'two', 'foo'])).toBe(false);
  });
});
