import { Foo } from 'test/fixture/module/foo';
import { loadModule } from 'utils';

describe('Loading a module path', () => {
  test('Returns expected module', async () => {
    const foo = await loadModule<Foo>('test/fixture/module/foo');
    expect(foo.getBar()).toBe('bar');
  });
});
