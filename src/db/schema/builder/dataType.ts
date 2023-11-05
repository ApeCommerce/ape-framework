import { module, Module } from '../../config';

const moduleType = (types: { [module in Exclude<Module, 'memory'>]: string }) => {
  const moduleTypes: { [module in Module]: string } = {
    ...types,
    memory: types.sqlite,
  };
  return moduleTypes[module];
};

const boolean = () => moduleType({
  mysql: 'tinyint',
  postgres: 'boolean',
  sqlite: 'integer',
});

const smallInt = () => moduleType({
  mysql: 'smallint',
  postgres: 'smallint',
  sqlite: 'integer',
});

const smallIntPrimaryAuto = () => moduleType({
  mysql: 'smallint primary key auto_increment',
  postgres: 'smallserial primary key',
  sqlite: 'integer primary key autoincrement',
});

const int = () => moduleType({
  mysql: 'integer',
  postgres: 'integer',
  sqlite: 'integer',
});

const intPrimaryAuto = () => moduleType({
  mysql: 'integer primary key auto_increment',
  postgres: 'serial primary key',
  sqlite: 'integer primary key autoincrement',
});

const bigInt = () => moduleType({
  mysql: 'bigint',
  postgres: 'bigint',
  sqlite: 'integer',
});

const bigIntPrimaryAuto = () => moduleType({
  mysql: 'bigint primary key auto_increment',
  postgres: 'bigserial primary key',
  sqlite: 'integer primary key autoincrement',
});

const float = () => moduleType({
  mysql: 'float',
  postgres: 'real',
  sqlite: 'real',
});

const double = () => moduleType({
  mysql: 'double',
  postgres: 'double precision',
  sqlite: 'real',
});

const numeric = (precision: number, scale: number) => moduleType({
  mysql: `numeric(${precision}, ${scale})`,
  postgres: `numeric(${precision}, ${scale})`,
  sqlite: 'numeric',
});

const char = (length: number) => moduleType({
  mysql: `char(${length})`,
  postgres: `char(${length})`,
  sqlite: 'text',
});

const varChar = (maxLength: number) => moduleType({
  mysql: `varchar(${maxLength})`,
  postgres: `varchar(${maxLength})`,
  sqlite: 'text',
});

const text = () => moduleType({
  mysql: 'text',
  postgres: 'text',
  sqlite: 'text',
});

const mediumText = () => moduleType({
  mysql: 'mediumtext',
  postgres: 'text',
  sqlite: 'text',
});

const longText = () => moduleType({
  mysql: 'longtext',
  postgres: 'text',
  sqlite: 'text',
});

const binary = (length: number) => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const varBinary = (maxLength: number) => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const blob = () => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const mediumBlob = () => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const longBlob = () => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const timestamp = () => moduleType({
  mysql: '',
  postgres: '',
  sqlite: '',
});

const datetime = () => moduleType({
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
  mediumBlob,
  mediumText,
  numeric,
  smallInt,
  smallIntPrimaryAuto,
  text,
  timestamp,
  varBinary,
  varChar,
};
