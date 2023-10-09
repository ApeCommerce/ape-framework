import { loadProperty } from 'config/utils';

describe('Loading a property using override', () => {
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
});

describe('Loading a property using file', () => {
  test('Returns expected value', async () => {
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
  });
});

describe('Loading a property using env', () => {
  test('Returns expected value', async () => {
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
  });
});

describe('Loading a property using default', () => {
  test('Returns expected value', async () => {
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
  });
});

describe('Loading a missing property', () => {
  test('Returns expected value', async () => {
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
});
