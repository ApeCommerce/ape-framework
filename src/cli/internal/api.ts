import { Api } from '../../api/api';
import { Command } from '../command';
import { exit, formatTable, formatText, writeLn } from '../utils';
import { loadModule, parseString } from '../../utils';

const help = formatText([
  'Usage:',
  formatTable([
    ['api start', 'Start API server'],
    ['api help', 'Show help'],
  ]),
]);

const command: Command = {
  arg: 'api',
  handler: async (args) => {
    const action = parseString(args[0]);
    if (!action || action === 'help') writeLn(help); exit();

    switch (action) {
      case 'start':
        const api = await loadModule<Api>('../../api');
        api.start();
        break;
      default:
        throw new Error(`API: invalid action "${action}"`);
    }
  },
};

export default command;
