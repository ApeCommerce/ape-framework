import { module, Module } from '../../config';

const dataType = (types: { [module in Exclude<Module, Module.memory>]: string }) => {
  const dataTypes: { [module in Module]: string } = { ...types, memory: types.sqlite };
  return dataTypes[module];
};

const boolean = () => dataType({
  mysql: 'bit',
  postgres: 'boolean',
  sqlite: 'integer',
});

const tinyInt = () => dataType({
  mysql: 'tinyint',
  postgres: 'smallint',
  sqlite: 'integer',
});

const smallInt = () => dataType({
  mysql: 'smallint',
  postgres: 'smallint',
  sqlite: 'integer',
});

const smallIntPrimaryAutoIncrement = () => dataType({
  mysql: 'smallint primary key auto_increment',
  postgres: 'smallserial primary key',
  sqlite: 'integer primary key autoincrement',
});

const int = () => dataType({
  mysql: 'integer',
  postgres: 'integer',
  sqlite: 'integer',
});

const intPrimaryAutoIncrement = () => dataType({
  mysql: 'integer primary key auto_increment',
  postgres: 'serial primary key',
  sqlite: 'integer primary key autoincrement',
});

const bigInt = () => dataType({
  mysql: 'bigint',
  postgres: 'bigint',
  sqlite: 'integer',
});

const bigIntPrimaryAutoIncrement = () => dataType({
  mysql: 'bigint primary key auto_increment',
  postgres: 'bigserial primary key',
  sqlite: 'integer primary key autoincrement',
});

const float = () => dataType({
  mysql: 'float',
  postgres: 'real',
  sqlite: 'real',
});

const double = () => dataType({
  mysql: 'double',
  postgres: 'double precision',
  sqlite: 'real',
});

const numeric = (precision: number, scale: number) => dataType({
  mysql: `numeric(${precision}, ${scale})`,
  postgres: `numeric(${precision}, ${scale})`,
  sqlite: 'numeric',
});

const char = (length: number) => dataType({
  mysql: `char(${length})`,
  postgres: `char(${length})`,
  sqlite: 'text',
});

const varChar = (maxLength: number) => dataType({
  mysql: `varchar(${maxLength})`,
  postgres: `varchar(${maxLength})`,
  sqlite: 'text',
});

const tinyText = () => dataType({
  mysql: 'tinytext',
  postgres: 'text',
  sqlite: 'text',
});

const text = () => dataType({
  mysql: 'text',
  postgres: 'text',
  sqlite: 'text',
});

const longText = () => dataType({
  mysql: 'longtext',
  postgres: 'text',
  sqlite: 'text',
});

const binary = (length: number) => dataType({
  mysql: `binary(${length})`,
  postgres: 'bytea',
  sqlite: 'blob',
});

const varBinary = (maxLength: number) => dataType({
  mysql: `varbinary(${maxLength})`,
  postgres: 'bytea',
  sqlite: 'blob',
});

const tinyBlob = () => dataType({
  mysql: 'tinyblob',
  postgres: 'bytea',
  sqlite: 'blob',
});

const blob = () => dataType({
  mysql: 'blob',
  postgres: 'bytea',
  sqlite: 'blob',
});

const longBlob = () => dataType({
  mysql: 'longblob',
  postgres: 'bytea',
  sqlite: 'blob',
});

const timestamp = () => dataType({
  mysql: 'timestamp(3)',
  postgres: 'timestamp(3)',
  sqlite: 'text',
});

const dateTime = () => dataType({
  mysql: ' datetime(3)',
  postgres: 'timestamp(3)',
  sqlite: 'text',
});

const date = () => dataType({
  mysql: 'date',
  postgres: 'date',
  sqlite: 'text',
});

const time = () => dataType({
  mysql: 'time(3)',
  postgres: 'time(3)',
  sqlite: 'text',
});

export default {
  bigInt,
  bigIntPrimaryAutoIncrement,
  binary,
  blob,
  boolean,
  char,
  date,
  dateTime,
  double,
  float,
  int,
  intPrimaryAutoIncrement,
  longBlob,
  longText,
  numeric,
  smallInt,
  smallIntPrimaryAutoIncrement,
  text,
  time,
  timestamp,
  tinyBlob,
  tinyInt,
  tinyText,
  varBinary,
  varChar,
};
