import {exit, formatList, formatTable, formatText, writeLn,} from '../utils'
import { parseString } from '../../utils'
import type { Command } from '../command'

const help = formatText([
  'Usage:',
  formatTable([
    ['queue list', 'List queues.'],
    ['queue process <queueId>', 'Process queue.'],
  ]),
])

const list = async () => {
  const mq = (await import('../../mq')).default
  const queues = await mq.getQueues()
  if (queues.length) {
    writeLn(formatText([
      'Queues:',
      formatList(queues.map((queue) => queue.queueId)),
    ]))
  } else {
    writeLn('No queue.')
  }
}

const process = async (queueId: string) => {
  if (!queueId) throw new Error('queue: queueId not provided')

  const mq = (await import('../../mq')).default
  const queue = await mq.getQueue(queueId)
  if (!queue) throw new Error(`queue: invalid queueId "${queueId}"`)

  mq.createWorker(queue).start()
}

const command: Command = {
  name: 'queue',
  handler: async (args) => {
    const action = parseString(args[0])
    if (!action || action === 'help') { writeLn(help); exit() }

    const queueId = parseString(args[1])

    switch (action) {
      case 'list':
        await list()
        break
      case 'process':
        await process(queueId)
        break
      default:
        throw new Error(`queue: invalid action "${action}"`)
    }
  },
}

export default command
