import { Api } from '../../api/api';
import { Command } from '../command';
import { exit, formatTable, formatText, writeLn } from '../utils';
import { parseString } from '../../utils';

const help = formatText([
  'Usage:',
  formatTable([
    ['api start', 'Start API server.'],
    ['api help', 'Show help.'],
  ]),
]);

const start = async () => {
  const api: Api = (await import('../../api')).default;
  api.start();
};

const command: Command = {
  arg: 'api',
  handler: async (args) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') { writeLn(help); exit(); }

    switch (action) {
      case 'start':
        await start();
        break;
      default:
        throw new Error(`API: invalid action "${action}"`);
    }
  },
};

export default command;
