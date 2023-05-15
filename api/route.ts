import { Endpoint } from '@apecommerce/ape-common/endpoint';
import { Handler } from './handler';

export interface Route { endpoint: Endpoint, handler: Handler }
