import '../../config';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting intPrimaryAuto', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.intPrimaryAuto('one');
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
