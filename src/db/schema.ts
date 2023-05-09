import { ColumnBuilder, Database } from 'framework/db';

interface Table {
  db: Database,
  name: string,
}

interface Column {
  name: string,
  dataType: DataType,
  nullConstraint: NullConstraint,
  index?: Index,
  referencedTable?: string,
  onDelete?: OnDelete,
}

type DataType = 'boolean' | 'decimal' | 'integer' | 'string';
type NullConstraint = 'notNull' | 'null';
type Index = 'index' | 'noIndex' | 'primary' | 'unique';
type OnDelete = 'cascade' | 'restrict';

const longNameRegex = /[A-Z][a-z]{4,}|[a-z]{5,}/g;

const shortName = (...name: string[]) => name.map(
  (string) => string.replace(longNameRegex, (match) => match.substring(0, 4)),
).join('_');

export const createTable = (table: Table, ...columns: Column[]) => table.db.schema
  .createTable(table.name, (tableBuilder) => {
    const primaryKey: string[] = [];
    columns.forEach((column) => {
      let columnBuilder: ColumnBuilder;
      switch (column.dataType) {
        case 'boolean':
          columnBuilder = tableBuilder.boolean(column.name);
          break;
        case 'decimal':
          columnBuilder = tableBuilder.decimal(column.name, 32, 16);
          break;
        case 'integer':
          columnBuilder = tableBuilder.integer(column.name);
          break;
        default:
          columnBuilder = tableBuilder.string(column.name);
      }
      switch (column.nullConstraint) {
        case 'null':
          columnBuilder.nullable();
          break;
        default:
          columnBuilder.notNullable();
      }
      switch (column.index) {
        case 'index':
          columnBuilder.index(shortName('IDX', table.name, column.name));
          break;
        case 'primary':
          if (primaryKey.length > 0) {
            columnBuilder.index(shortName('IDX', table.name, column.name));
          }
          primaryKey.push(column.name);
          break;
        case 'unique':
          columnBuilder.unique({ indexName: shortName('UNQ', table.name, column.name) });
          break;
        default:
      }
      if (column.referencedTable) {
        columnBuilder
          .references(column.name)
          .inTable(column.referencedTable)
          .withKeyName(shortName('FK', table.name, column.referencedTable, column.name))
          .onUpdate('CASCADE')
          .onDelete(column.onDelete ? column.onDelete.toUpperCase() : 'RESTRICT');
      }
    });
    if (primaryKey.length > 0) {
      tableBuilder.primary(primaryKey);
    }
  });

export const dropTable = (table: Table) => table.db.schema.dropTable(table.name);

export const table = (db: Database, name: string): Table => ({ db, name });

export const column = (
  name: string,
  dataType: DataType,
  nullConstraint: NullConstraint,
  index?: Index,
  referencedTable?: string,
  onDelete?: OnDelete,
): Column => ({ name, dataType, nullConstraint, index, referencedTable, onDelete });

export default {
  createTable,
  dropTable,
  table,
  column,
};
