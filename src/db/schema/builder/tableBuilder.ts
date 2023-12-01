import { booleanColumnRegex } from '../../postProcess'
import { ColumnBuilder } from './columnBuilder'
import dataType from './dataType'
import type { Database } from '../../database'

export type NullConstraint = 'null' | 'notNull'

export class TableBuilder {
  private knexTableBuilder: Database.TableBuilder

  constructor(knexTableBuilder: Database.TableBuilder) {
    this.knexTableBuilder = knexTableBuilder
  }

  boolean(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (!name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.boolean())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  tinyInt(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.tinyInt())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  smallInt(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.smallInt())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  smallIntPrimaryAutoIncrement(
    name: string
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.smallIntPrimaryAutoIncrement())
    return new ColumnBuilder(knexColumnBuilder)
  }

  int(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.int())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  intPrimaryAutoIncrement(
    name: string
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.intPrimaryAutoIncrement())
    return new ColumnBuilder(knexColumnBuilder)
  }

  bigInt(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.bigInt())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  bigIntPrimaryAutoIncrement(
    name: string
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.bigIntPrimaryAutoIncrement())
    return new ColumnBuilder(knexColumnBuilder)
  }

  float(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.float())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  double(name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.double())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  numeric(
    name: string,
    precision: number,
    scale: number,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    if (precision < 1 || precision > 15)
      throw new Error(`db: invalid column precision "${precision}"`)
    if (scale < 0 || scale >= precision)
      throw new Error(`db: invalid column scale "${scale}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.numeric(precision, scale))
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  char(
    name: string,
    length: number,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    if (length < 1 || length > 255)
      throw new Error(`db: invalid column length "${length}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.char(length))
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  varChar(
    name: string,
    maxLength: number,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    if (maxLength < 1 || maxLength > 65535)
      throw new Error(`db: invalid column maxLength "${maxLength}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.varChar(maxLength))
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  tinyText(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.tinyText())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  text(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.text())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  longText(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.longText())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  binary(
    name: string,
    length: number,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    if (length < 1 || length > 255)
      throw new Error(`db: invalid column length "${length}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.binary(length))
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  varBinary(
    name: string,
    maxLength: number,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    if (maxLength < 1 || maxLength > 65535)
      throw new Error(`db: invalid column maxLength "${maxLength}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.varBinary(maxLength))
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  tinyBlob(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.tinyBlob())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  blob(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.blob())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  longBlob(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.longBlob())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  timestamp(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.timestamp())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  dateTime(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.dateTime())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  date(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.date())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  time(
    name: string,
    nullConstraint: NullConstraint
  ) {
    if (name.match(booleanColumnRegex))
      throw new Error(`db: invalid column name "${name}"`)
    const knexColumnBuilder = this.knexTableBuilder
      .specificType(name, dataType.time())
    if (nullConstraint === 'notNull') knexColumnBuilder.notNullable()
    return new ColumnBuilder(knexColumnBuilder)
  }

  dropColumn(name: string) {
    this.knexTableBuilder.dropColumn(name)
    return this
  }

  renameColumn(name: string, toName: string) {
    this.knexTableBuilder.renameColumn(name, toName)
    return this
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

export default TableBuilder
