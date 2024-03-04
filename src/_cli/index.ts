import parseArgs from 'yargs-parser'
import { exit, formatList, formatTable, formatText, writeLn } from './utils'
import { getBundles } from '../app'
import { parseString } from '../utils'
import internalCommands from './internal'

const exec = async () => {
  const commands = internalCommands.slice()
  for (const bundle of await getBundles()) {
    (bundle.commands ? await bundle.commands() : [])
      .forEach((command) => commands.push(command))
  }

  const help = formatText([
    'Usage:',
    formatTable([
      ['cli <command>', 'Execute command.'],
      ['cli help', 'Show help.'],
    ]),
    '',
    'Commands:',
    formatList(commands.map((command) => command.name).sort()),
  ])

  const options: Record<string, any> = parseArgs(process.argv.slice(2))
  const args: any[] = options._
  delete options._

  const name = parseString(args.shift())
  if (!name || name === 'help') {
    writeLn(help)
    exit()
  }

  const command = commands.find((command) => command.name === name)
  if (!command) throw new Error(`cli: invalid command "${name}"`)

  command.handler(args, options)
}

export default exec