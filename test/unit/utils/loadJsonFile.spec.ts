import { Foo } from 'test/fixture/json/foo';
import { loadJsonFile } from 'utils';

describe('Loading a JSON file', () => {
  test('Returns expected value', async () => {
    const json = loadJsonFile<Foo>('test/fixture/json/foo.json');
    expect(json).toStrictEqual({
      boo: true,
      num: 3,
      str: 'foo',
      obj: { bar: 'bar' },
      arr: ['one', 'two'],
      nul: null,
    });
  });
});

describe('Loading a missing JSON file', () => {
  test('Throws an error', async () => {
    expect(() => {
      loadJsonFile('test/fixture/json/xxx.json');
    }).toThrow();
  });
});
