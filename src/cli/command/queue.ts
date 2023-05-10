import { exit, parseString, writeLn, Command } from 'cli';
import { formatList, formatTable, formatText } from 'cli/format';
import mq from 'mq';

const help = formatText([
  'Usage:',
  formatTable([
    ['queue list', 'List queues.'],
    ['queue process <queueId>', 'Process queue.'],
  ]),
]);

const list = async () => {
  const queues = await mq.getQueues();
  if (queues.length) {
    writeLn(formatText([
      'Queues:',
      formatList(queues.map((queue) => queue.queueId)),
    ]));
  } else {
    writeLn('No queue.');
  }
};

const process = async (queueId: string) => {
  if (!queueId) { throw new Error('Queue: queue id not provided'); }
  const queue = await mq.getQueue(queueId);
  if (!queue) { throw new Error(`Queue: invalid queue id "${queueId}"`); }
  mq.createWorker(queue).start();
};

const command: Command = {
  arg: 'queue',
  handler: async (args) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') { writeLn(help); exit(); }

    const queueId = parseString(args[1]);

    switch (action) {
      case 'list':
        await list();
        break;
      case 'process':
        await process(queueId);
        break;
      default:
        throw new Error(`Queue: invalid action "${action}"`);
    }
  },
};

export default command;
