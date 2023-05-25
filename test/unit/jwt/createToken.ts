import 'test/unit/config';
import { createToken, Auth } from 'jwt';
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
