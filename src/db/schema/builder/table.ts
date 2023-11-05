import { booleanColumnRegex } from '../../postProcess';
import { ColumnBuilder } from './column';
import { module } from '../../config';
import type { Database } from '../../database';

export class TableBuilder {
  private knexTableBuilder: Database.TableBuilder;

  constructor(knexTableBuilder: Database.TableBuilder) {
    this.knexTableBuilder = knexTableBuilder;
  }

  boolean(name: string) {
    if (!name.match(booleanColumnRegex)) throw new Error(`db: invalid column name "${name}"`);
    return new ColumnBuilder(this.knexTableBuilder.boolean(name));
  }

  smallInt(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.smallint(name));
  }

  int(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.integer(name));
  }

  intAutoIncrement(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.increments(name));
  }

  bigInt(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.bigint(name));
  }

  bigIntAutoIncrement(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.bigIncrements(name));
  }

  float(name: string) {
    return module === 'postgres'
      ? new ColumnBuilder(this.knexTableBuilder.specificType(name, 'real'))
      : new ColumnBuilder(this.knexTableBuilder.specificType(name, 'float'));
  }

  double(name: string) {
    return module === 'postgres'
      ? new ColumnBuilder(this.knexTableBuilder.specificType(name, 'double precision'))
      : new ColumnBuilder(this.knexTableBuilder.specificType(name, 'double'));
  }

  numeric(name: string, precision: number, scale: number) {
    if (precision < 1 || precision > 15) throw new Error(`db: invalid column precision "${precision}"`);
    if (scale < 0 || scale >= precision) throw new Error(`db: invalid column scale "${scale}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, `numeric(${precision}, ${scale})`));
  }

  char(name: string, length: number) {
    if (length < 1 || length > 255) throw new Error(`db: invalid column length "${length}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, `char(${length})`));
  }

  varChar(name: string, maxLength: number) {
    if (maxLength < 1 || maxLength > 65535) throw new Error(`db: invalid column maxLength "${maxLength}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, `varchar(${maxLength})`));
  }

  text(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.text(name));
  }

  mediumText(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.text(name, 'mediumtext'));
  }

  longText(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.text(name, 'longtext'));
  }

  binary(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.binary(name));
  }

  varBinary(name: string, maxLength: number) {
    return new ColumnBuilder(this.knexTableBuilder.binary(name, maxLength));
  }

  blob(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.binary(name));
  }

  longBlob(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.binary(name));
  }

  timestamp(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.timestamp(name, { useTz: false }));
  }

  datetime(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.datetime(name));
  }

  dropColumn(name: string) {
    this.knexTableBuilder.dropColumn(name);
    return this;
  }

  renameColumn(name: string, toName: string) {
    this.knexTableBuilder.renameColumn(name, toName);
    return this;
  }

  setNull() {

  }

  setNotNull() {

  }

  setPrimary() {

  }

  dropPrimary() {

  }

  addForeign() {

  }

  dropForeign() {

  }

  addUnique() {

  }

  dropUnique() {

  }

  addIndex() {

  }

  dropIndex() {

  }
}

export default TableBuilder;
