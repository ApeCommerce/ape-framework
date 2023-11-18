import '../../config';
import { randomBytes } from 'crypto';
import db, { SchemaBuilder } from 'db';

const schema = new SchemaBuilder(db);

afterEach(async () => {
  await schema.dropTableIfExists('foo');
});

afterAll(async () => {
  await db.destroy();
});

describe('Inserting / selecting binary data type', () => {
  test('Returns expected value', async () => {
    await schema.createTable('foo', (table) => {
      table.binary('one', 250, 'null');
    });

    const data = [
      { one: null },
      { one: randomBytes(250) },
    ];

    await db('foo').insert(data);

    const result = await db('foo').select();

    expect(result).toEqual(data);
  });
});
