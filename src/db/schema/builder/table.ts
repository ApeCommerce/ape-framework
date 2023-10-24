import { Column } from './column';
import type { Database } from '../../database';

export class Table {
  private tableBuilder: Database.TableBuilder;

  constructor(tableBuilder: Database.TableBuilder) {
    this.tableBuilder = tableBuilder;
  }

  string(columnName: string, maxLength: number) {
    const columnBuilder = this.tableBuilder.string(columnName, maxLength);
    return new Column(this, columnBuilder);
  }
}

export default Table;
