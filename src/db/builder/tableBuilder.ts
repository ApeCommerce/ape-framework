import { ColumnBuilder } from './columnBuilder';
import type { Database } from '../database';

export class TableBuilder {
  private knexTableBuilder: Database.TableBuilder;

  constructor(knexTableBuilder: Database.TableBuilder) {
    this.knexTableBuilder = knexTableBuilder;
  }

  boolean(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.boolean(name));
  }

  int(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.integer(name));
  }

  intAutoIncrement(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.increments(name));
  }

  bigInt(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.bigInteger(name));
  }

  bigIntAutoIncrement(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.bigIncrements(name));
  }

  float(name: string, precision: number, scale: number) {
    return new ColumnBuilder(this.knexTableBuilder.float(name, precision, scale));
  }

  double(name: string, precision: number, scale: number) {
    return new ColumnBuilder(this.knexTableBuilder.double(name, precision, scale));
  }

  decimal(name: string, precision: number, scale: number) {
    return new ColumnBuilder(this.knexTableBuilder.decimal(name, precision, scale));
  }

  // string - max 65 535 bytes
  string(name: string, length: number) {
    return new ColumnBuilder(this.knexTableBuilder.string(name, length));
  }

  // text - max 65 535 bytes
  text(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.text(name));
  }

  binary(name: string) {
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
