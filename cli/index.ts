import parse from 'yargs-parser';
import { exit, formatList, formatTable, formatText, writeLn } from './utils';
import { getBundles } from '../boot';
import { parseString } from '../utils';
import internalCommands from './internal';

const exec = async () => {
  const commands = internalCommands.concat((await getBundles()).flatMap((bundle) => bundle.commands));

  const help = formatText([
    'Usage:',
    formatTable([
      ['cli <command>', 'Execute command.'],
      ['cli help', 'Show help.'],
    ]),
    '',
    'Commands:',
    formatList(commands.map((command) => command.arg).sort()),
  ]);

  const input = parse(process.argv.slice(2));
  const args = input._;
  const options: { [name: string]: any } = input;
  delete options._;

  const arg = parseString(args.shift());
  if (!arg || arg === 'help') { writeLn(help); exit(); }

  const command = commands.find((c) => c.arg === arg);
  if (!command) { throw new Error(`CLI: invalid command "${arg}"`); }

  command.handler(args, options);
};

exec();
