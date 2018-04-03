Simple typescript in node for local test
========================================

Basic seed to use typescipt code in one file, transpile it and execute it in
node.
Require node and npm installed.

Build
-----

Install dependencies:
```sh
npm install
```

Typescript will be installed locally.
You can change his version in `./package.json`.

Use
---
```sh
node_modules/.bin/tsc && node build/code.js
```
