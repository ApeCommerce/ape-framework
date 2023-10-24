# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM package: [apeframework](https://www.npmjs.com/package/apeframework)

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework)

## Installation

```
npm install apeframework
```

## Hello Ape!

Let's create an API serving a `/hello` endpoint.

```ts
// boot.ts
import type { Boot, Bundle } from 'apeframework/app';

const welcomeBundle: Bundle = {
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
  bundles: async () => [welcomeBundle],
};

export default boot;
```

Start the API server:

```
npx ape-cli-ts api start
```

Request the API:

```
curl http://localhost:3000/hello
```
