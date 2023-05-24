import { uuid } from 'utils';

describe('Getting a UUID', () => {
  test('Returns a valid value', async () => {
    const id = uuid();
    expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
  });
});

describe('Getting multiple UUIDs', () => {
  test('Returns different values', async () => {
    const id1 = uuid();
    const id2 = uuid();
    const id3 = uuid();
    expect(id1).not.toEqual(id2);
    expect(id2).not.toEqual(id3);
    expect(id3).not.toEqual(id1);
  });
});
