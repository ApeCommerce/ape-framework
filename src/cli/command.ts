export interface Command {
  name: string,
  handler: (
    args: (any)[],
    options: Record<string, any>,
  ) => Promise<void>,
}
