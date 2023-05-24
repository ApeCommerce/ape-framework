import { Foo } from 'test/fixture/json/foo';
import { loadJsonFile } from 'utils';

describe('Loading an existing JSON file', () => {
  test('Returns expected data', async () => {
    const json = loadJsonFile<Foo>('test/fixture/json/foo.json');
    expect(json).toStrictEqual({
      boo: true,
      num: 3,
      str: 'foo',
      obj: { foo: 'bar' },
      arr: ['one', 'two'],
      nul: null,
    });
  });
});

describe('Loading a missing JSON file', () => {
  test('Fails', async () => {
    expect(() => {
      loadJsonFile<any>('test/fixture/json/xxx.json');
    }).toThrow();
  });
});
