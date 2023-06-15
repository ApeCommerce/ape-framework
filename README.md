# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM packages:

- [@ape-framework/server](https://www.npmjs.com/package/@ape-framework/server)
- [@ape-framework/common](https://www.npmjs.com/package/@ape-framework/common)

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework)

## Installation

Server side:

```
yarn add @ape-framework/server
```

Client side or within a shared library:

```
yarn add @ape-framework/common
```

The `common` package is a subset of the `server` package and has no dependency. It contains interfaces for a client application to interact with the server.

## Hello Ape!

Let's create an API serving a `/hello` endpoint.

Define a `hello` bundle:

```ts
// bundle/hello.ts
import { Bundle } from '@ape-framework/server/boot/bundle';
import sendResponse from '@ape-framework/server/api/handler';

const bundle: Bundle = {
  bundleId: 'hello',
  name: 'The hello bundle',
  routes: [
    {
      endpoint: {
        method: 'GET',
        path: '/hello',
      },
      handler: () => sendResponse('Hello Ape!'),
    },
  ],
};

export default bundle;
```

Define the boot module:

```ts
// boot.ts
import { Boot } from '@ape-framework/server/boot';

const boot: Boot = {
  bundleModules: ['bundle/hello'],
};

export default boot;
```

Start the API:

```
yarn ape-cli api start
```

Request the endpoint:

```
curl http://localhost:3000/hello
```
