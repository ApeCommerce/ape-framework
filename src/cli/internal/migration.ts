import { Command } from '../command';
import { exit, formatTable, formatText, writeLn } from '../utils';
import { getBundle } from '../../boot';
import { MigrationList } from '../../db/schema/migrationList';
import { parseBoolean, parseString } from '../../utils';
import { Schema } from '../../db/schema/schema';
import Database from '../../db/database';

const help = formatText([
  'Usage:',
  formatTable([
    ['migration list [-b <bundleId>] [--pending]', 'List migrations.'],
    ['migration run [-b <bundleId>] [--one]', 'Run migrations.'],
    ['migration rollback [-b <bundleId>] [--one]', 'Rollback migrations.'],
    ['migration help', 'Show help.'],
  ]),
  '',
  'Options:',
  formatTable([
    ['-b --bundle <bundleId>', 'Process specified bundle migrations only.'],
    ['--pending', 'Process pending migrations only.'],
    ['--one', 'Process one migration only.'],
  ]),
]);

const formatMigrations = (migrations: MigrationList) => formatTable(
  migrations.map((m) => [m.bundleId, m.migrationId, m.pending ? 'pending' : '']),
);

const list = async (bundleId?: string, pending?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default;
  const migrations = await schema.listMigrations(bundleId, pending);
  if (migrations.length) {
    writeLn(formatText([
      'Migrations:',
      formatMigrations(migrations),
    ]));
  } else {
    writeLn('No migration.');
  }
  ((await import('../../db')).default as Database).destroy();
};

const run = async (bundleId?: string, one?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default;
  const migrations = await schema.runMigrations(bundleId, one);
  if (migrations.length) {
    writeLn(formatText([
      'Run migrations:',
      formatMigrations(migrations),
    ]));
  } else {
    writeLn('Nothing to do.');
  }
  ((await import('../../db')).default as Database).destroy();
};

const rollback = async (bundleId?: string, one?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default;
  const migrations = await schema.rollbackMigrations(bundleId, one);
  if (migrations.length) {
    writeLn(formatText([
      'Rolled back migrations:',
      formatMigrations(migrations),
    ]));
  } else {
    writeLn('Nothing to do.');
  }
  ((await import('../../db')).default as Database).destroy();
};

const command: Command = {
  name: 'migration',
  handler: async (args, options) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') { writeLn(help); exit(); }

    const bundleId = parseString(options.b || options.bundle) || undefined;
    if (bundleId && !(await getBundle(bundleId))) throw new Error(`Migration: invalid bundleId "${bundleId}"`);

    const pending = parseBoolean(options.pending);
    const one = parseBoolean(options.one);

    switch (action) {
      case 'list':
        await list(bundleId, pending);
        break;
      case 'run':
        await run(bundleId, one);
        break;
      case 'rollback':
        await rollback(bundleId, one);
        break;
      default:
        throw new Error(`Migration: invalid action "${action}"`);
    }
  },
};

export default command;
