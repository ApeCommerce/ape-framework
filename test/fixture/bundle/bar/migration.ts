import { Migration } from 'db/migration';

const migrations: Migration[] = [
  {
    migrationId: 'one',
    up: async (db) => {
      await db.schema.createTable('BarOne', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('BarOne');
    },
  },
  {
    migrationId: 'two',
    up: async (db) => {
      await db.schema.createTable('BarTwo', (table) => {
        table.integer('id').primary();
      });
    },
    down: async (db) => {
      db.schema.dropTable('BarTwo');
    },
  },
];

export default migrations;
