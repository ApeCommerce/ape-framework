export interface Queue {
  queueId: string,
  jobs: Job[],
}

export interface Job {
  jobId: string,
  process: (data: any, progress: Progress) => Promise<void>,
}

export type Progress = (current: number, total: number) => void;
