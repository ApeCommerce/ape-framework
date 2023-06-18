import 'test/unit/config';
import { hasRoles } from 'jwt';
import { User } from 'jwt/user';

const user: User = { id: 'foo', roles: ['one', 'two'] };

describe('Checking roles', () => {
  test('Returns expected value', async () => {
    expect(hasRoles(user, [])).toBe(true);
    expect(hasRoles(user, ['one'])).toBe(true);
    expect(hasRoles(user, ['two'])).toBe(true);
    expect(hasRoles(user, ['one', 'two'])).toBe(true);

    expect(hasRoles(user, [''])).toBe(false);
    expect(hasRoles(user, ['foo'])).toBe(false);
    expect(hasRoles(user, ['one', 'two', 'foo'])).toBe(false);
  });
});
