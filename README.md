# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM packages:

- [@ape-framework/server](https://www.npmjs.com/package/@ape-framework/server)
- [@ape-framework/common](https://www.npmjs.com/package/@ape-framework/common)

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework)

## Starter project

Use [@ape-framework/starter](https://www.npmjs.com/package/@ape-framework/starter) to quickly create a Node.js application using Ape Framework.

## Installation

Server side:

```
npm install @ape-framework/server
```

Client side or within a shared library:

```
npm install @ape-framework/common
```

The `common` package contains useful interfaces for a client application to interact with the server. It is a subset of the `server` package and has no dependency.

## Hello Ape!

Let's create an API serving a `/hello` endpoint.

```ts
// boot.ts
import { Boot } from '@ape-framework/server/boot';
import { Bundle } from '@ape-framework/server/boot/bundle';
import { send } from '@ape-framework/server/api/handler';

const welcomeBundle: Bundle = {
  bundleId: 'welcome',
  name: 'Welcome',
  routes: [
    {
      endpoint: {
        method: 'GET',
        path: '/hello',
      },
      handler: async (request, reply) => send(reply, 'Hello Ape!'),
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
