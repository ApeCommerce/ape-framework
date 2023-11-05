import { booleanColumnRegex } from '../../postProcess';
import { ColumnBuilder } from './column';
import dataType from './dataType';
import type { Database } from '../../database';

export class TableBuilder {
  private knexTableBuilder: Database.TableBuilder;

  constructor(knexTableBuilder: Database.TableBuilder) {
    this.knexTableBuilder = knexTableBuilder;
  }

  boolean(name: string) {
    if (!name.match(booleanColumnRegex)) throw new Error(`db: invalid column name "${name}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.boolean()));
  }

  smallInt(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.smallInt()));
  }

  smallIntPrimaryAuto(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.smallIntPrimaryAuto()));
  }

  int(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.int()));
  }

  intPrimaryAuto(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.intPrimaryAuto()));
  }

  bigInt(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.bigInt()));
  }

  bigIntPrimaryAuto(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.bigIntPrimaryAuto()));
  }

  float(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.float()));
  }

  double(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.double()));
  }

  numeric(name: string, precision: number, scale: number) {
    if (precision < 1 || precision > 15) throw new Error(`db: invalid column precision "${precision}"`);
    if (scale < 0 || scale >= precision) throw new Error(`db: invalid column scale "${scale}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.numeric(precision, scale)));
  }

  char(name: string, length: number) {
    if (length < 1 || length > 255) throw new Error(`db: invalid column length "${length}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.char(length)));
  }

  varChar(name: string, maxLength: number) {
    if (maxLength < 1 || maxLength > 65535) throw new Error(`db: invalid column maxLength "${maxLength}"`);
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.varChar(maxLength)));
  }

  text(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.text()));
  }

  mediumText(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.mediumText()));
  }

  longText(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.longText()));
  }

  binary(name: string, length: number) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.binary(length)));
  }

  varBinary(name: string, maxLength: number) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.varBinary(maxLength)));
  }

  blob(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.blob()));
  }

  mediumBlob(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.mediumBlob()));
  }

  longBlob(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.longBlob()));
  }

  timestamp(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.timestamp()));
  }

  datetime(name: string) {
    return new ColumnBuilder(this.knexTableBuilder.specificType(name, dataType.datetime()));
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
