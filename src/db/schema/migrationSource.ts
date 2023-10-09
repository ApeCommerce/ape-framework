import { Bundle } from '../../app';
import { Migration } from './migration';

export class MigrationSource {
  private bundle: Bundle;

  constructor(bundle: Bundle) {
    this.bundle = bundle;
  }

  async getMigrations() {
    return this.bundle.migrations ? this.bundle.migrations() : Promise.resolve([]);
  }

  getMigrationName(migration: Migration) {
    return migration.migrationId;
  }

  getMigration(migration: Migration) {
    return Promise.resolve(migration);
  }
}

export default MigrationSource;
