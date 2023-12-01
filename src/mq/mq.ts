import type { Job, Queue } from './queue'

export interface Mq {
  getQueues: () => Promise<Queue[]>,
  getQueue: (queueId: string) => Promise<Queue | undefined>,
  createSender: (queue: Queue) => Sender,
  createWorker: (queue: Queue) => Worker,
}

export interface Sender {
  send: <Data>(job: Job, data: Data) => Promise<void>,
  close: () => Promise<void>,
}

export interface Worker {
  start: () => void,
  close: () => Promise<void>,
}
