export interface Command {
  name: string,
  handler: (
    args: (any)[],
    options: { [name: string]: any },
  ) => Promise<void>,
}
