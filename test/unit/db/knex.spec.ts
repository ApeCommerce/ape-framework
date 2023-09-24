import { Knex } from 'knex';

describe('Loading the Knex module', () => {
  test('Returns the Knex interface', async () => {
    const knex = (await import('db/knex')).default;
    expect(knex).toBe(Knex);
  });
});
