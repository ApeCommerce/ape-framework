import { getConfig } from '../config'

const config = getConfig()

if (!config.appBoot) throw new Error('app: boot not provided')

export default {
  boot: config.appBoot,
  migrationTable: config.appMigrationTable,
}
