import { Endpoint } from '@apecommerce/ape-common/dist/endpoint';

const endpoint: Endpoint = {
  method: 'PATCH',
  path: '/foo',
  description: 'The foo bar',
};

console.log('hello', endpoint);
