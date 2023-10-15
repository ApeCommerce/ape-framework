import { MigrationList } from './migrationList';

export interface Schema {
  listMigrations: (bundleId?: string, pendingOnly?: boolean) => Promise<MigrationList>,
  rollbackMigrations: (bundleId?: string, one?: boolean) => Promise<MigrationList>,
  runMigrations: (bundleId?: string, one?: boolean) => Promise<MigrationList>,
}
