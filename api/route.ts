import { Endpoint } from './endpoint';
import { Handler } from './handler';

export interface Route { endpoint: Endpoint, handler: Handler }
