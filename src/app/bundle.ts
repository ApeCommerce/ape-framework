import type { Command } from '../cli/command';
import type { Migration } from '../db/schema/migration';
import type { Queue } from '../mq/queue';
import type { Route } from '../api/route';
import type { Translation } from '../i18n/translation';

export interface Bundle {
  bundleId: string,
  name: string,
  commands?: () => Promise<Command[]>,
  migrations?: () => Promise<Migration[]>,
  queues?: () => Promise<Queue[]>,
  routes?: () => Promise<Route[]>,
  translations?: () => Promise<Translation[]>,
}
