import { Table } from './table';
import type { Database } from '../../database';

export class Builder {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  createTable(name: string, build: (table: Table) => void) {
    return this.db.schema.createTable(name, (tableBuilder) => {
      const table = new Table(tableBuilder);
      build(table);
    });
  }
}

export default Builder;
