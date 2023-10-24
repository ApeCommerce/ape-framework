import { Table } from './table';
import type { Database } from '../../database';

export class Builder {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  createTable(name: string, build: (table: Table) => void) {
    return this.db.schema.createTable(name, (builder) => {
      const table = new Table(builder);
      build(table);
    });
  }
}

export default Builder;
