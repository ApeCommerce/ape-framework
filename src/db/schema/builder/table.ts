import { Column } from './column';
import { Database } from '../../database';

export class Table {
  private tableBuilder: Database.TableBuilder;

  constructor(builder: Database.TableBuilder) {
    this.tableBuilder = builder;
  }

  string(columnName: string, maxLength: number) {
    const columnBuilder = this.tableBuilder.string(columnName, maxLength);
    return new Column(this, columnBuilder);
  }
}

export default Table;
