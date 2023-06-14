#! /usr/bin/env node
const fs = require('fs');

const name = process.argv.slice(2).shift();

if (!['server', 'common'].includes(name)) throw new Error(`Bad package name "${name}"`);

const devPackage = JSON.parse(fs.readFileSync('package.json').toString());

const pkg = {
  name: `@ape-framework/${name}`,
  version: '__version__',
  license: 'MIT',
  description: '__description__',
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

fs.writeFileSync(`dist/${name}/package.json`, JSON.stringify(pkg, null, 2));

fs.copyFileSync('README.md', `dist/${name}/README.md`);
fs.copyFileSync('LICENSE', `dist/${name}/LICENSE`);
