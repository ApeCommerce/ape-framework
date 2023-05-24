import { Foo } from 'test/fixture/module/foo';
import { loadModule } from 'utils';

describe('Loading a module', () => {
  test('Returns expected module', async () => {
    const foo = await loadModule<Foo>('test/fixture/module/foo');
    expect(foo.getBar()).toBe('bar');
  });
});

describe('Loading a missing module', () => {
  test('Fails', async () => {
    expect.assertions(1);
    try {
      await loadModule<any>('test/fixture/module/xxx');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });
});
