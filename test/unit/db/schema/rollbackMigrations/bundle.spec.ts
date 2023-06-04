import 'test/unit/config';
import { listMigrations, rollbackMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Rolling back bundle migrations', () => {
  test('Returns expected result', async () => {
    await runMigrations();
    const list = await rollbackMigrations('foo');
    expect(list).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'three',
      },
      {
        bundleId: 'foo',
        migrationId: 'two',
      },
      {
        bundleId: 'foo',
        migrationId: 'one',
      },
    ]);
    expect(await listMigrations()).toStrictEqual([
      {
        bundleId: 'foo',
        migrationId: 'one',
        pending: true,
      },
      {
        bundleId: 'foo',
        migrationId: 'two',
        pending: true,
      },
      {
        bundleId: 'foo',
        migrationId: 'three',
        pending: true,
      },
      {
        bundleId: 'bar',
        migrationId: 'one',
        pending: false,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: false,
      },
    ]);
  });
});
