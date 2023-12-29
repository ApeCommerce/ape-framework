#! /usr/bin/env node
const fs = require('fs-extra')

const id = process.argv.slice(2).shift()
if (!['main', 'shared'].includes(id)) {
  throw new Error(`invalid package id "${id}"`)
}

const devPkg = fs.readJsonSync('package.json')

const tsConfig = fs.readJsonSync(`tsconfig.${id}.json`)

const pkg = {
  name: id === 'main'
    ? 'apeframework'
    : '@apeframework/shared',
  version: '__version__',
  license: 'MIT',
  author: 'Matthieu Symoens',
  description: id === 'main'
    ? '__description__'
    : 'Ape Framework shared package',
  keywords: ['ape', 'framework'],
  repository: {
    type: 'git',
    url: 'git+https://github.com/ApeCommerce/ape-framework.git',
  },
  publishConfig: {
    access: 'public',
  },
  main: 'index.js',
  types: 'index.d.ts',
  bin: id === 'main' ? devPkg.bin : undefined,
  engines: devPkg.engines,
  dependencies: id === 'main' ? devPkg.dependencies : undefined,
}

fs.ensureDirSync(`dist/${id}`)

fs.writeJsonSync(`dist/${id}/package.json`, pkg, { spaces: 2 })

fs.copySync('LICENSE', `dist/${id}/LICENSE`)
fs.copySync(
  id === 'main' ? 'README.md' : 'README.shared.md',
  `dist/${id}/README.md`,
)

tsConfig.include.forEach((path) => {
  fs.copySync(path, `dist/${id}${path.substring('src'.length)}`)
})

if (id === 'main') {
  fs.copySync('bin/ape-cli.js', `dist/${id}/bin/ape-cli.js`)
  fs.copySync('bin/ape-cli-ts.js', `dist/${id}/bin/ape-cli-ts.js`)
}
