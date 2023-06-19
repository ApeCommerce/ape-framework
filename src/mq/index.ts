import { loadModule } from '../utils';
import { module } from './module/config';
import { Mq } from './mq';

let mq: Mq;

export const initMq = async () => {
  mq = await loadModule<Mq>(`./module/${module}`);
  return mq;
};

export const getMq = async () => mq || initMq();

export default {
  initMq,
  getMq,
};
