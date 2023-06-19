import { getBundles } from '../../boot';
import { Mq, Sender, Worker } from '../mq';
import { Queue } from '../queue';

export default abstract class MqModule implements Mq {
  async getQueues() {
    return (await getBundles()).flatMap((bundle) => bundle.queues || []);
  }

  async getQueue(queueId: string) {
    return (await this.getQueues()).find((queue) => queue.queueId === queueId);
  }

  abstract createSender(queue: Queue): Sender;
  abstract createWorker(queue: Queue): Worker;
}
