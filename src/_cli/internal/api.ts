import { exit, formatTable, formatText, writeLn } from '../utils'
import { parseString } from '../../utils'
import type { Api } from '../../api/api'
import type { Command } from '../command'

const help = formatText([
  'Usage:',
  formatTable([
    ['api start', 'Start API server.'],
    ['api help', 'Show help.'],
  ]),
])

const start = async () => {
  const api: Api = (await import('../../api')).default
  api.start()
}

const command: Command = {
  name: 'api',
  handler: async (args) => {
    const action = parseString(args[0])
    if (!action || action === 'help') {
      writeLn(help)
      exit()
    }

    switch (action) {
      case 'start':
        await start()
        break
      default:
        throw new Error(`api: invalid action "${action}"`)
    }
  },
}

export default command
