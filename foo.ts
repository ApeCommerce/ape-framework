import { Endpoint } from '@apecommerce/ape-common/endpoint';

const endpoint: Endpoint = {
  method: 'PATCH',
  path: '/foo',
  description: 'The foo bar',
};

console.log('hello', endpoint);
