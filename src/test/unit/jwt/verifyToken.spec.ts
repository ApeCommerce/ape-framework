import 'test/unit/config';
import { createToken, verifyToken } from 'jwt';
import { parseMilliseconds, parseSeconds, timestamp, wait } from 'utils';
import { User } from 'jwt/user';

const user: User = { id: 'foo', roles: ['one', 'two'] };
const type = 'authorization';

describe('Verifying a valid token', () => {
  test('Returns expected value', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    expect(await verifyToken(token, type, timestamp())).toStrictEqual(user);
  });
});

describe('Verifying an invalid token', () => {
  test('Fails', async () => {
    expect(await verifyToken('oops', type, timestamp())).toBe(undefined);
  });
});

describe('Verifying an expired token', () => {
  test('Fails', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    await wait(parseMilliseconds('1s'));
    expect(await verifyToken(token, type, timestamp())).toBe(undefined);
  });
});

describe('Verifying a token that mismatches type', () => {
  test('Fails', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    expect(await verifyToken(token, 'oops', timestamp())).toBe(undefined);
  });
});
