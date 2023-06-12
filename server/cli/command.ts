export interface Command {
  arg: string,
  handler: (
    args: (any)[],
    options: { [name: string]: any },
  ) => Promise<void>,
}
