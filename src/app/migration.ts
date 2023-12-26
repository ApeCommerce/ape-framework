export interface Migration {
  migrationId: string,
  up: () => Promise<void>,
  down: () => Promise<void>,
}
