import { exit, formatTable, formatText, writeLn, } from '../utils'
import { getBundle } from '../../app'
import { parseBoolean, parseString } from '../../utils'
import type { Command } from '../command'
import type { MigrationList } from '../../db/schema/migrationList'
import type { Schema } from '../../db/schema/schema'

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
    ['-b --bundle <bundleId>', 'Process specified bundle migrations.'],
    ['--pending', 'List pending migrations.'],
    ['--one', 'Process one migration.'],
  ]),
])

const formatMigrations = (migrations: MigrationList) => formatTable(
  migrations.map((m) => [m.bundleId, m.migrationId, m.pending ? 'pending' : '']),
)

const list = async (bundleId?: string, pending?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default
  const migrations = await schema.listMigrations(bundleId, pending)
  if (migrations.length) {
    writeLn(formatText([
      'Migrations:',
      formatMigrations(migrations),
    ]))
  } else {
    writeLn('No migration.')
  }
  ((await import('../../db')).default).destroy()
}

const run = async (bundleId?: string, one?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default
  const migrations = await schema.runMigrations(bundleId, one)
  if (migrations.length) {
    writeLn(formatText([
      'Run migrations:',
      formatMigrations(migrations),
    ]))
  } else {
    writeLn('Nothing to do.')
  }
  ((await import('../../db')).default).destroy()
}

const rollback = async (bundleId?: string, one?: boolean) => {
  const schema: Schema = (await import('../../db/schema')).default
  const migrations = await schema.rollbackMigrations(bundleId, one)
  if (migrations.length) {
    writeLn(formatText([
      'Rolled back migrations:',
      formatMigrations(migrations),
    ]))
  } else {
    writeLn('Nothing to do.')
  }
  ((await import('../../db')).default).destroy()
}

const command: Command = {
  name: 'migration',
  handler: async (args, options) => {
    const action = parseString(args[0])
    if (!action || action === 'help') { writeLn(help); exit() }

    const bundleId = parseString(options.b || options.bundle) || undefined
    if (bundleId && !(await getBundle(bundleId)))
      throw new Error(`migration: invalid bundleId "${bundleId}"`)

    const pending = parseBoolean(options.pending)
    const one = parseBoolean(options.one)

    switch (action) {
      case 'list':
        await list(bundleId, pending)
        break
      case 'run':
        await run(bundleId, one)
        break
      case 'rollback':
        await rollback(bundleId, one)
        break
      default:
        throw new Error(`migration: invalid action "${action}"`)
    }
  },
}

export default command
