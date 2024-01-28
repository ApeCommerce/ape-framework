import { MqModule } from '..'
import type { Job } from '../../queue'

export class BypassMq extends MqModule {
  createSender() {
    return {
      send: async <Data>(job: Job, data: Data) => job.process(data, () => { }),
      close: async () => { },
    }
  }

  createWorker() {
    return {
      start: async () => { },
      close: async () => { },
    }
  }
}

export default BypassMq
