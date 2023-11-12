import type { Migration } from 'db';

const migrations: Migration[] = [
  {
    migrationId: 'one',
    up: async (db) => {
      await db.schema.createTable('bar_one', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('bar_one');
    },
  },
  {
    migrationId: 'two',
    up: async (db) => {
      await db.schema.createTable('bar_two', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('bar_two');
    },
  },
];

export default migrations;
