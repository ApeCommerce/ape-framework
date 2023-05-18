import { getBundles } from '../../boot';
import { Job, Queue } from '../queue';

export interface Sender {
  send: <Data>(job: Job, data: Data) => Promise<void>,
  close: () => Promise<void>,
}

export interface Worker {
  start: () => void,
  close: () => Promise<void>,
}

export default abstract class MqModule {
  async getQueues() {
    return (await getBundles()).flatMap((bundle) => bundle.queues);
  }

  async getQueue(queueId: string) {
    return (await this.getQueues()).find((q) => q.queueId === queueId);
  }

  abstract createSender(queue: Queue): Sender;
  abstract createWorker(queue: Queue): Worker;
}
