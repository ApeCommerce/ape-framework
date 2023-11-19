import { TableBuilder } from './tableBuilder';
import type { Database } from '../../database';

export class SchemaBuilder {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  createTable(name: string, build: (table: TableBuilder) => void) {
    return this.db.schema.createTable(name, (knexTableBuilder) => {
      build(new TableBuilder(knexTableBuilder));
    });
  }

  createTableLike(name: string, likeName: string, build: (table: TableBuilder) => void) {
    return this.db.schema.createTableLike(name, likeName, (knexTableBuilder) => {
      build(new TableBuilder(knexTableBuilder));
    });
  }

  alterTable(name: string, build: (table: TableBuilder) => void) {
    return this.db.schema.alterTable(name, (knexTableBuilder) => {
      build(new TableBuilder(knexTableBuilder));
    });
  }

  dropTable(name: string) {
    return this.db.schema.dropTable(name);
  }

  dropTableIfExists(name: string) {
    return this.db.schema.dropTableIfExists(name);
  }

  renameTable(name: string, toName: string) {
    return this.db.schema.renameTable(name, toName);
  }

  hasTable(name: string) {
    return this.db.schema.hasTable(name);
  }

  hasColumn(tableName: string, columnName: string) {
    return this.db.schema.hasColumn(tableName, columnName);
  }
}

export default SchemaBuilder;
