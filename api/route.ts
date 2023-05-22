import { Endpoint } from '../common';
import { Handler } from './handler';

export interface Route { endpoint: Endpoint, handler: Handler }
