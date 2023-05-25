import 'test/unit/config';
import { hasRoles, Auth } from 'jwt';

const auth: Auth = { id: 'foo', roles: ['one', 'two'] };

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
