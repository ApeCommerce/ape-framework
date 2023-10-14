#! /usr/bin/env node
const fs = require('fs-extra');

const name = process.argv.slice(2).shift();
if (!['server', 'common'].includes(name)) throw new Error(`invalid package name "${name}"`);

const devPackage = fs.readJsonSync('package.json');

const pkg = {
  name: `@ape-framework/${name}`,
  version: '__version__',
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: '__description__',
  keywords: ['ape', 'api', 'framework', 'node', 'typescript'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeCommerce/ape-framework.git',
  },
  publishConfig: {
    access: 'public',
  },
  main: 'index.js',
  types: 'index.d.ts',
  ...(name === 'server' ? { bin: devPackage.bin } : {}),
  engines: devPackage.engines,
  ...(name === 'server' ? { dependencies: devPackage.dependencies } : {}),
  devDependencies: devPackage.devDependencies,
};

fs.writeJsonSync(`dist/${name}/package.json`, pkg, { spaces: 2 });

fs.copySync('README.md', `dist/${name}/README.md`);
fs.copySync('LICENSE', `dist/${name}/LICENSE`);

if (name === 'server') {
  fs.copySync('bin/ape-cli.js', `dist/${name}/bin/ape-cli.js`);
  fs.copySync('bin/ape-cli-ts.js', `dist/${name}/bin/ape-cli-ts.js`);
  fs.copySync('src', `dist/${name}`);
}
