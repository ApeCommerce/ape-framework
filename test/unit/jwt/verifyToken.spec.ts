import '../config';
import { createToken, verifyToken, User } from 'jwt';
import { parseMilliseconds, parseSeconds, timestamp, wait } from 'utils';

const user: User = { userId: 'foo', roles: ['one', 'two'] };
const type = 'authorization';

describe('Verifying a valid token', () => {
  test('Returns expected value', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    expect(await verifyToken(token, type, timestamp())).toStrictEqual(user);
  });
});

describe('Verifying an invalid token', () => {
  test('Returns expected value', async () => {
    expect(await verifyToken('oops', type, timestamp())).toBe(undefined);
  });
});

describe('Verifying an expired token', () => {
  test('Returns expected value', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    await wait(parseMilliseconds('1s'));
    expect(await verifyToken(token, type, timestamp())).toBe(undefined);
  });
});

describe('Verifying a token with mismatching type', () => {
  test('Returns expected value', async () => {
    const token = await createToken(user, type, timestamp(), parseSeconds('1s'));
    expect(await verifyToken(token, 'oops', timestamp())).toBe(undefined);
  });
});
