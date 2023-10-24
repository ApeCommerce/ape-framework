import { module } from './module/config';
import type { Mq } from './mq';

export default (await import(`./module/${module}`)).default as Mq;
