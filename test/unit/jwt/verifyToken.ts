import 'test/unit/config';
import { createToken, verifyToken, Auth } from 'jwt';
import { parseMilliseconds, parseSeconds, timestamp, wait } from 'utils';

const auth: Auth = { id: 'foo', roles: ['one', 'two'] };
const type = 'authorization';
const expiration = parseSeconds('1s');

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
