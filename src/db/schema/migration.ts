import type { Database } from '../database'

export interface Migration {
  migrationId: string,
  up: (db: Database) => Promise<void>,
  down: (db: Database) => Promise<void>,
}
