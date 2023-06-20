import { module } from './module/config';
import { Mq } from './mq';

export default (await import(`./module/${module}`)).default as Mq;
