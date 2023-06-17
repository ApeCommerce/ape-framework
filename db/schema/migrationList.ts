export type MigrationList = {
  bundleId: string,
  migrationId: string,
  pending?: boolean,
}[];

export default MigrationList;
