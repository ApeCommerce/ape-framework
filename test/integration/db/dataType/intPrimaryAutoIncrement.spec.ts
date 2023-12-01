import '../../config';
import { insertGetKey, insertGetKeys } from 'db/utils';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting intPrimaryAutoIncrement', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.intPrimaryAutoIncrement('one');
      table.int('two', 'null');
    });
    await db('foo').insert([
      { two: 1 },
      { two: 2 },
      { two: 3 },
    ]);
    const result = await db('foo').select();
    expect(result).toEqual([
      { one: 1, two: 1 },
      { one: 2, two: 2 },
      { one: 3, two: 3 },
    ]);
  });
});

describe('Getting inserted key on intPrimaryAutoIncrement', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.intPrimaryAutoIncrement('one');
      table.int('two', 'null');
    });
    const key = await insertGetKey(db('foo'), 'one', { two: 1 });
    expect(key).toBe(1);
    const keys = await insertGetKeys(db('foo'), 'one', [
      { two: 2 },
      { two: 3 },
      { two: 4 },
    ]);
    expect(keys).toEqual([2, 3, 4]);
  });
});
