import '../../../config';
import { listMigrations, runMigrations } from 'db/schema';
import db from 'db';

afterAll(async () => {
  await db.destroy();
});

describe('Listing pending migrations', () => {
  test('Returns expected result', async () => {
    const list1 = await listMigrations(undefined, true);
    expect(list1).toStrictEqual([
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
        pending: true,
      },
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);

    await runMigrations('foo');
    const list2 = await listMigrations(undefined, true);
    expect(list2).toStrictEqual([
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

    await runMigrations('bar', true);
    const list3 = await listMigrations(undefined, true);
    expect(list3).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'two',
        pending: true,
      },
    ]);
  });
});
