import '../../../config'
import { listMigrations, rollbackMigrations, runMigrations } from 'db/schema'
import db from 'db'

afterAll(async () => {
  await db.destroy()
})

describe('Rolling back migrations', () => {
  test('Returns expected value', async () => {
    await runMigrations()
    const list1 = await rollbackMigrations()
    expect(list1).toStrictEqual([
      {
        bundleId: 'bar',
        migrationId: 'two',
      },
      {
        bundleId: 'bar',
        migrationId: 'one',
      },
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
    ])

    const list2 = await listMigrations()
    expect(list2).toStrictEqual([
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
    ])
  })
})
