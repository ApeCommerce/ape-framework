import 'test/unit/config';
import { listMigrations, rollbackMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Rolling back one migration', () => {
  test('Returns expected result', async () => {
    await runMigrations();
    const list1 = await rollbackMigrations(undefined, true);
    expect(list1).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'two',
      },
    ]);

    const list2 = await listMigrations();
    expect(list2).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
        pending: false,
      },
      {
        bundleId: 'foo',
        migrationId: 'two',
        pending: false,
      },
      {
        bundleId: 'foo',
        migrationId: 'three',
        pending: false,
      },
      {
        bundleId: 'bar',
        migrationId: 'one',
        pending: false,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);
  });
});
