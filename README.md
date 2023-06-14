# Ape Framework

[Node.js](https://nodejs.org) API framework.

NPM packages:

- [@ape-framework/server](https://www.npmjs.com/package/@ape-framework/server)
- [@ape-framework/common](https://www.npmjs.com/package/@ape-framework/common)

GitHub repository: [ApeCommerce/ape-framework](https://github.com/ApeCommerce/ape-framework)

## Installation

Server package:

```
yarn add @ape-framework/server
```

Common package:

```
yarn add @ape-framework/common
```

The `common` package is a subset of the `server` package with no dependency. It contains useful interfaces and modules for use within client applications or shared libraries.

## Hello Ape!

Create a `hello` bundle:

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
