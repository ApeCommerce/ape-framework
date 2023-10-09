import { getBundles } from '../../app';
import { Mq, Sender, Worker } from '../mq';
import { Queue } from '../queue';

export abstract class MqModule implements Mq {
  async getQueues() {
    const queues: Queue[] = [];
    for (const bundle of await getBundles()) {
      (bundle.queues ? await bundle.queues() : []).forEach((queue) => {
        queues.push(queue);
      });
    }
    return queues;
  }

  async getQueue(queueId: string) {
    return (await this.getQueues()).find((queue) => queue.queueId === queueId);
  }

  abstract createSender(queue: Queue): Sender;
  abstract createWorker(queue: Queue): Worker;
}

export default MqModule;
