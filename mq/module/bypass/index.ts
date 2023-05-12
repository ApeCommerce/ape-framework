import { Job, MqModule } from 'mq/module';

export default class BypassMq extends MqModule {
  createSender() {
    return {
      send: async <Data>(job: Job, data: Data) => job.process(data, () => { }),
      close: async () => { },
    };
  }

  createWorker() {
    return {
      start: async () => { },
      close: async () => { },
    };
  }
}
