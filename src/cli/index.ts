import { formatList, formatTable, formatText } from 'framework/cli/format';
import { getBundles } from 'framework/boot';
import frameworkCommands from 'framework/cli/command';
import parse from 'yargs-parser';

export interface Command {
  arg: string,
  handler: (
    args: (any)[],
    options: { [argName: string]: any },
  ) => Promise<void>,
}

export const parseBoolean = (input: any) => input === true;
export const parseNumber = (input: any) => Number(input) || 0;
export const parseString = (input: any) => String(input || '');

export const write = (s: string) => process.stdout.write(s);
export const writeLn = (s: string) => process.stdout.write(`${s}\n`);

export const exit = (code?: number) => process.exit(code);

const exec = async () => {
  const commands = frameworkCommands
    .concat((await getBundles()).flatMap((bundle) => bundle.commands));

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
