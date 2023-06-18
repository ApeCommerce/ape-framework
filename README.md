# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM packages:

- [@ape-framework/server](https://www.npmjs.com/package/@ape-framework/server)
- [@ape-framework/common](https://www.npmjs.com/package/@ape-framework/common)

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework)

## Installation

Server side:

```
npm install @ape-framework/server
```

Client side or within a shared library:

```
npm install @ape-framework/common
```

The `common` package contains interfaces for a client application to interact with the server. It is a subset of the `server` package and has no dependency.

## Hello Ape!

Let's create an API serving a `/hello` endpoint.

Create a `welcome` bundle:

```ts
// bundle/welcome.ts
import { Bundle } from '@ape-framework/server/boot/bundle';
import { send } from '@ape-framework/server/api/handler';

const bundle: Bundle = {
  bundleId: 'welcome',
  name: 'The welcome bundle',
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

export default bundle;
```

Define the boot module:

```ts
// boot/index.ts
import { Boot } from '@ape-framework/server/boot';

const boot: Boot = {
  bundleModules: ['bundle/welcome'],
};

export default boot;
```

Start the API server:

```
npx ape-cli-ts api start
```

Request the `/hello` endpoint:

```
curl http://localhost:3000/hello
```
