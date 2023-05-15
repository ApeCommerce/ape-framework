import { Command } from '../cli/command';
import { Migration } from '../db';
import { Queue } from '../mq/module';
import { Route } from '../api/route';
import { Translation } from '../i18n/translation';

export interface Bundle {
  bundleId: string,
  name: string,
  routes: Route[],
  migrations: Migration[],
  queues: Queue[],
  commands: Command[],
  translations: Translation[],
}
