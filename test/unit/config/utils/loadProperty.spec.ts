import { getProperty } from 'config/utils';

describe('Getting a property using override', () => {
  test('Returns expected value', async () => {
    expect(getProperty('foo', {
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

describe('Getting a property using file', () => {
  test('Returns expected value', async () => {
    expect(getProperty('foo', {
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

describe('Getting a property using env', () => {
  test('Returns expected value', async () => {
    expect(getProperty('foo', {
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

describe('Getting a property using default', () => {
  test('Returns expected value', async () => {
    expect(getProperty('foo', {
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

describe('Getting a missing property', () => {
  test('Returns expected value', async () => {
    expect(getProperty('foo', {
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
