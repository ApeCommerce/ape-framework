import { Command } from '../command';
import { exit, formatTable, formatText, writeLn } from '../utils';
import { parseString } from '../../utils';
import api from '../../api';

const help = formatText([
  'Usage:',
  formatTable([
    ['api start', 'Start API server.'],
    ['api help', 'Show help.'],
  ]),
]);

const command: Command = {
  arg: 'api',
  handler: async (args) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') writeLn(help); exit();

    switch (action) {
      case 'start':
        api.start();
        break;
      default:
        throw new Error(`API: invalid action "${action}"`);
    }
  },
};

export default command;
