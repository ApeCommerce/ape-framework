import 'test/unit/config';
import { listMigrations, rollbackMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Rolling back one migration', () => {
  test('Returns expected result', async () => {
    await runMigrations();
    const list = await rollbackMigrations(undefined, true);
    expect(list).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'two',
      },
    ]);
    expect(await listMigrations()).toStrictEqual([
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
