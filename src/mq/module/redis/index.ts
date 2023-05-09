import { Job as BullJob, Queue as BullQueue, Worker as BullWorker } from 'bullmq';
import { Job, MqModule, Progress, Queue } from 'framework/mq/module';
import config from 'framework/mq/module/redis/config';
import log from 'framework/log';

const formatJob = (queue: Queue, job?: BullJob) => (queue.queueId + (job ? ` #${job.id} ${job.name}` : ''));

export default class RedisMq extends MqModule {
  createSender(queue: Queue) {
    const bullQueue = new BullQueue(queue.queueId, config.queueOptions);
    bullQueue.on('waiting', (job) => log.debug(`MQ: job "${formatJob(queue, job)}" waiting`));

    return {
      send: async <Data>(job: Job, data: Data) => { await bullQueue.add(job.jobId, data); },
      close: () => bullQueue.close(),
    };
  }

  createWorker(queue: Queue) {
    const jobs: { [name: string]: Job; } = {};
    queue.jobs.forEach((job) => { jobs[job.jobId] = job; });

    const bullWorker = new BullWorker(queue.queueId, async (bullJob) => {
      const progress: Progress = (c, t) => bullJob.updateProgress(Math.floor((c / t) * 100));
      await jobs[bullJob.name].process(bullJob.data, progress);
    }, config.workerOptions);

    bullWorker.on('active', (job) => log.debug(`MQ: job "${formatJob(queue, job)}" active`));
    bullWorker.on('progress', (job, progress) => log.debug(`MQ: job "${formatJob(queue, job)}" progress ${progress}%`));
    bullWorker.on('completed', (job) => log.debug(`MQ: job "${formatJob(queue, job)}" completed`));
    bullWorker.on('failed', (job, error) => {
      log.error(`MQ: job "${formatJob(queue, job)}" failed`);
      log.error(error);
      bullWorker.close();
    });

    return {
      start: async () => { await bullWorker.run(); },
      close: async () => bullWorker.close(),
    };
  }
}
