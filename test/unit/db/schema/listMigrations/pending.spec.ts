import 'test/unit/config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Listing pending migrations', () => {
  test('Returns expected result', async () => {
    await runMigrations('foo');
    const list = await listMigrations(undefined, true);
    expect(list).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'one',
        pending: true,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);
  });
});
