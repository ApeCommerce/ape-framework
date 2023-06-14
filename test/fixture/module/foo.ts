export interface Foo {
  getBar: () => string,
}

const foo: Foo = {
  getBar: () => 'bar',
};

export default foo;
