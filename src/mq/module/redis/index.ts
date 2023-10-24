import { Job as BullJob, Queue as BullQueue, Worker as BullWorker } from 'bullmq';
import { MqModule } from '..';
import config from './config';
import log from '../../../log';
import type { Job, Progress, Queue } from '../../queue';

const formatJob = (queue: Queue, job?: BullJob) => (queue.queueId + (job ? ` #${job.id} ${job.name}` : ''));

export class RedisMq extends MqModule {
  createSender(queue: Queue) {
    const bullQueue = new BullQueue(queue.queueId, config.queueOptions);
    bullQueue.on('waiting', (job) => log.debug(`mq: job "${formatJob(queue, job)}" waiting`));

    return {
      send: async <Data>(job: Job, data: Data) => { await bullQueue.add(job.jobId, data); },
      close: bullQueue.close,
    };
  }

  createWorker(queue: Queue) {
    const jobs: { [name: string]: Job; } = {};
    queue.jobs.forEach((job) => { jobs[job.jobId] = job; });

    const bullWorker = new BullWorker(queue.queueId, async (bullJob) => {
      const progress: Progress = (c, t) => bullJob.updateProgress(Math.floor((c / t) * 100));
      await jobs[bullJob.name].process(bullJob.data, progress);
    }, config.workerOptions);

    bullWorker.on('active', (job) => log.debug(`mq: job "${formatJob(queue, job)}" active`));
    bullWorker.on('progress', (job, progress) => log.debug(`mq: job "${formatJob(queue, job)}" progress ${progress}%`));
    bullWorker.on('completed', (job) => log.debug(`mq: job "${formatJob(queue, job)}" completed`));
    bullWorker.on('failed', (job, error) => {
      log.error(`mq: job "${formatJob(queue, job)}" failed`);
      log.error(error);
      bullWorker.close();
    });

    return {
      start: bullWorker.run,
      close: bullWorker.close,
    };
  }
}

export default RedisMq;
