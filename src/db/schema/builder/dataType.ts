import { module, Module } from '../../config';

const dataType = (types: { [module in Exclude<Module, Module.memory>]: string }) => {
  const dataTypes: { [module in Module]: string } = {
    ...types,
    memory: types.sqlite,
  };
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

const smallIntPrimaryAuto = () => dataType({
  mysql: 'smallint primary key auto_increment',
  postgres: 'smallserial primary key',
  sqlite: 'integer primary key autoincrement',
});

const int = () => dataType({
  mysql: 'integer',
  postgres: 'integer',
  sqlite: 'integer',
});

const intPrimaryAuto = () => dataType({
  mysql: 'integer primary key auto_increment',
  postgres: 'serial primary key',
  sqlite: 'integer primary key autoincrement',
});

const bigInt = () => dataType({
  mysql: 'bigint',
  postgres: 'bigint',
  sqlite: 'integer',
});

const bigIntPrimaryAuto = () => dataType({
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
  postgres: 'timestamp',
  sqlite: 'text',
});

const datetime = () => dataType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

export default {
  bigInt,
  bigIntPrimaryAuto,
  binary,
  blob,
  boolean,
  char,
  datetime,
  double,
  float,
  int,
  intPrimaryAuto,
  longBlob,
  longText,
  numeric,
  smallInt,
  smallIntPrimaryAuto,
  text,
  timestamp,
  tinyBlob,
  tinyInt,
  tinyText,
  varBinary,
  varChar,
};
