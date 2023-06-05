import { Migration } from 'db/migration';

const migrations: Migration[] = [
  {
    migrationId: 'one',
    up: async (db) => {
      await db.schema.createTable('FooOne', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('FooOne');
    },
  },
  {
    migrationId: 'two',
    up: async (db) => {
      await db.schema.createTable('FooTwo', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('FooTwo');
    },
  },
  {
    migrationId: 'three',
    up: async (db) => {
      await db.schema.createTable('FooThree', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('FooThree');
    },
  },
];

export default migrations;
