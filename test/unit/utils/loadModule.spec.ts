import { Foo } from 'test/fixture/module/foo';
import { loadModule } from 'utils';

describe('Loading a module', () => {
  test('Returns expected value', async () => {
    const foo = await loadModule<Foo>('test/fixture/module/foo');
    expect(foo.getBar()).toBe('bar');
  });
});

describe('Loading a missing module', () => {
  test('Throws an error', async () => {
    expect.assertions(1);
    try {
      await loadModule('test/fixture/module/oops');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
