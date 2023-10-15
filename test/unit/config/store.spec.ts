import { Store } from 'config';

describe('Getting a property', () => {
  test('Returns expected value', async () => {
    expect((new Store({
      foo: 'mainFoo',
      bar: 'mainBar',
    }, {
      foo: 'cascadeFoo',
      bar: 'cascadeBar',
    })).get('foo')).toBe('mainFoo');

    expect((new Store({
      bar: 'mainBar',
    }, {
      foo: 'cascadeFoo',
      bar: 'cascadeBar',
    })).get('foo')).toBe('cascadeFoo');
  });
});

describe('Getting a missing property', () => {
  test('Returns expected value', async () => {
    expect((new Store({
      foo: 'mainFoo',
      bar: 'mainBar',
    }, {
      foo: 'cascadeFoo',
      bar: 'cascadeBar',
    })).get('foo')).toBe('mainFoo');

    expect((new Store({
      bar: 'mainBar',
    }, {
      bar: 'cascadeBar',
    })).get('foo')).toBe(undefined);
  });
});
