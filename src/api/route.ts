import type { Endpoint } from './endpoint';
import type { Handler } from './handler';

export interface Route { endpoint: Endpoint, handler: Handler }
