import { getBundle, getBundles, Bundle } from '../../app'
import { MigrationSource } from './migrationSource'
import config from './config'
import db from '..'
import type { Migration } from './migration'
import type { MigrationList } from './migrationList'
import type { Schema } from './schema'

const migrationConfig = (bundle: Bundle) => ({
  migrationSource: new MigrationSource(bundle),
  tableName: `${config.tablePrefix}_${bundle.bundleId}`,
})

const filterBundles = async (bundleId?: string, reverse?: boolean, one?: boolean) => {
  const bundles: Bundle[] = []
  if (bundleId) {
    const bundle = await getBundle(bundleId)
    if (bundle) bundles.push(bundle)
  } else {
    for (const bundle of await getBundles()) {
      if (bundle.migrations && (await bundle.migrations()).length) {
        bundles.push(bundle)
      }
    }
  }
  if (reverse) bundles.reverse()
  return bundles.slice(0, one ? 1 : undefined)
}

export const listMigrations = async (bundleId?: string, pending?: boolean) => {
  const migrationList: MigrationList = []
  for (const bundle of await filterBundles(bundleId)) {
    const result = await db.migrate.list(migrationConfig(bundle))
    const done: { name: string }[] = result[0]
    const pendingMigrations: Migration[] = result[1]
    if (!pending) {
      done.forEach((migration) => migrationList.push({
        bundleId: bundle.bundleId,
        migrationId: migration.name,
        pending: false,
      }))
    }
    pendingMigrations.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration.migrationId,
      pending: true,
    }))
  }
  return migrationList
}

export const runMigrations = async (bundleId?: string, one?: boolean) => {
  const migrationList: MigrationList = []
  for (const bundle of await filterBundles(bundleId, false, one)) {
    const result = one
      ? await db.migrate.up(migrationConfig(bundle))
      : await db.migrate.latest(migrationConfig(bundle))
    const done: string[] = result[1]
    done.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }))
  }
  return migrationList
}

export const rollbackMigrations = async (bundleId?: string, one?: boolean) => {
  const migrationList: MigrationList = []
  for (const bundle of await filterBundles(bundleId, true, one)) {
    const result = one
      ? await db.migrate.down(migrationConfig(bundle))
      : await db.migrate.rollback(migrationConfig(bundle))
    const done: string[] = result[1]
    done.forEach((migration) => migrationList.push({
      bundleId: bundle.bundleId,
      migrationId: migration,
    }))
  }
  return migrationList
}

const schema: Schema = {
  listMigrations,
  rollbackMigrations,
  runMigrations,
}

export default schema
