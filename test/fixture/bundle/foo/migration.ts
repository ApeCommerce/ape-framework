import type { Migration } from 'db';

const migrations: Migration[] = [
  {
    migrationId: 'one',
    up: async (db) => {
      await db.schema.createTable('foo_one', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('foo_one');
    },
  },
  {
    migrationId: 'two',
    up: async (db) => {
      await db.schema.createTable('foo_two', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('foo_two');
    },
  },
  {
    migrationId: 'three',
    up: async (db) => {
      await db.schema.createTable('foo_three', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('foo_three');
    },
  },
];

export default migrations;
