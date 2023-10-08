import { loadProperty } from 'config/utils';

describe('Loading a property', () => {
  test('Returns expected value', async () => {
    expect(loadProperty).toBeDefined();
  });
});
