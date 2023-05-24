import { uuid } from 'utils';

describe('Getting a UUID', () => {
  test('Returns a valid value', async () => {
    const id = uuid();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });
});
