import '../config';
import { Builder } from 'db/schema/builder';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Hello', () => {
  test(':)', async () => {
    const builder = new Builder(db);

    await builder.createTable('foo', (table) => {
      table.string('string', 10);
    });

    await db('foo').insert({ string: 'hello' });

    const res = await db('foo').select();

    expect(res).toBeDefined();
  });
});
