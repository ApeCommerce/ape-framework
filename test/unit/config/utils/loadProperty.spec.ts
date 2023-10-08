import { loadProperty } from 'config/utils';

describe('Loading a property', () => {
  test('Returns expected value', async () => {
    expect(loadProperty('foo', {
      foo: 'overrideFoo',
      bar: 'overrideBar',
    }, {
      foo: 'fileFoo',
      bar: 'fileBar',
    }, {
      foo: 'envFoo',
      bar: 'envBar',
    }, {
      foo: 'defaultFoo',
      bar: 'defaultBar',
    })).toBe('overrideFoo');
  });

  expect(loadProperty('foo', {
    bar: 'overrideBar',
  }, {
    foo: 'fileFoo',
    bar: 'fileBar',
  }, {
    foo: 'envFoo',
    bar: 'envBar',
  }, {
    foo: 'defaultFoo',
    bar: 'defaultBar',
  })).toBe('fileFoo');

  expect(loadProperty('foo', {
    bar: 'overrideBar',
  }, {
    bar: 'fileBar',
  }, {
    foo: 'envFoo',
    bar: 'envBar',
  }, {
    foo: 'defaultFoo',
    bar: 'defaultBar',
  })).toBe('envFoo');

  expect(loadProperty('foo', {
    bar: 'overrideBar',
  }, {
    bar: 'fileBar',
  }, {
    bar: 'envBar',
  }, {
    foo: 'defaultFoo',
    bar: 'defaultBar',
  })).toBe('defaultFoo');

  expect(loadProperty('foo', {
    bar: 'overrideBar',
  }, {
    bar: 'fileBar',
  }, {
    bar: 'envBar',
  }, {
    bar: 'defaultBar',
  })).toBe(undefined);
});
