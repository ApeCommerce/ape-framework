import { Command } from '../cli/command';
import { Migration } from '../db/migration';
import { Queue } from '../mq/queue';
import { Route } from '../api/route';
import { Translation } from '../i18n/translation';

export interface Bundle {
  bundleId: string,
  name: string,
  routes?: Route[],
  migrations?: Migration[],
  queues?: Queue[],
  commands?: Command[],
  translations?: Translation[],
}
