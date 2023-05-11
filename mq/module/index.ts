import { getBundles } from 'boot';

export interface Queue {
  queueId: string,
  jobs: Job[],
}

export interface Job {
  jobId: string,
  process: (data: any, progress: Progress) => Promise<void>,
}

export interface Sender {
  send: <Data>(job: Job, data: Data) => Promise<void>,
  close: () => Promise<void>,
}

export interface Worker {
  start: () => void,
  close: () => Promise<void>,
}

export type Progress = (current: number, total: number) => void;

export abstract class MqModule {
  async getQueues() {
    return (await getBundles()).flatMap((bundle) => bundle.queues);
  }

  async getQueue(queueId: string) {
    return (await this.getQueues()).find((q) => q.queueId === queueId);
  }

  abstract createSender(queue: Queue): Sender;
  abstract createWorker(queue: Queue): Worker;
}
