import { Database } from '../../database';

export class Table {
  private builder: Database.CreateTableBuilder;

  constructor(builder: Database.CreateTableBuilder) {
    this.builder = builder;
  }

  string(name: string, length: number) {
    this.builder.string(name, length);
  }
}

export default Table;
