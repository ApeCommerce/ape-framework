import { Foo } from 'test/fixture/json/foo';
import { parseJsonFile } from 'utils';

describe('Parsing a JSON file', () => {
  test('Returns expected data', async () => {
    const json = parseJsonFile<Foo>('test/fixture/json/foo.json');
    expect(json.foo).toBe('bar');
  });
});
