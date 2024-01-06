# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM package: [apeframework](https://www.npmjs.com/package/apeframework).

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework).

## Installation

Install package:

```
npm install apeframework
```

Install peer dependencies:

```
npm install --save-dev \
  typescript \
  @types/node \
  tsconfig-paths \
  ts-node
```

## Hello Ape!

Let's make an API serving a `/hello` endpoint.

Create a `boot.ts` file at the root of your project:

```ts
import type { Boot, Bundle } from 'apeframework/app';

const welcome: Bundle = {
  bundleId: 'welcome',
  name: 'Welcome',
  routes: async () => [
    {
      endpoint: {
        method: 'GET',
        path: '/hello',
      },
      handler: async (request, reply) => reply.send('Hello Ape!'),
    },
  ],
};

const boot: Boot = {
  bundles: async () => [welcome],
};

export default boot;
```

Start the API using CLI:

```
npx ape-cli-ts api start
```

Request the API:

```
curl http://localhost:3000/hello
```
