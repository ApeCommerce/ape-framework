import 'test/unit/config';
import { createToken, verifyToken, Auth } from 'jwt';
import { parseMilliseconds, parseSeconds, timestamp, wait } from 'utils';

const auth: Auth = { id: 'foo', roles: ['one', 'two'] };
const type = 'authorization';
const expiration = parseSeconds('1s');

describe('Verifying a valid token', () => {
  test('Returns expected value', async () => {
    const token = await createToken(auth, type, timestamp(), expiration);
    expect(await verifyToken(token, type, timestamp())).toStrictEqual(auth);
  });
});

describe('Verifying an invalid token', () => {
  test('Fails', async () => {
    expect(await verifyToken('oops', type, timestamp())).toBe(undefined);
  });
});

describe('Verifying an expired token', () => {
  test('Fails', async () => {
    const token = await createToken(auth, type, timestamp(), expiration);
    await wait(parseMilliseconds('1s'));
    expect(await verifyToken(token, type, timestamp())).toBe(undefined);
  });
});

describe('Verifying a token that mismatches type', () => {
  test('Fails', async () => {
    const token = await createToken(auth, type, timestamp(), expiration);
    expect(await verifyToken(token, 'oops', timestamp())).toBe(undefined);
  });
});
