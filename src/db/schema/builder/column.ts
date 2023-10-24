import { Database } from '../../database';
import type { Table } from './table';

export class Column {
  private table: Table;

  private columnBuilder: Database.ColumnBuilder;

  constructor(
    table: Table,
    columnBuilder: Database.ColumnBuilder,
  ) {
    this.table = table;
    this.columnBuilder = columnBuilder;
  }

  index() {
    this.columnBuilder.index();
  }
}

export default Column;
