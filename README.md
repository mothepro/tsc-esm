# tsc-esm

> Fixes the file extensions in TypeScript files so they may be loaded as ES modules.

## ⚠️ string literals may be affected by this ️️⚠️

ES Modules require `import`s to contain the file extension.

Currently, TypeScript doesn't add the file extensions for you. ([issue](https://github.com/microsoft/TypeScript/issues/16577)) 🤞

Although, they could be added in the TS file this makes using the non-module (nodejs / mocha testing) difficult.

This simple program allows you to continue writing your TS files without the extension and will append `.js` to all your local imports.

## Example

This:

```typescript
import Default from "no-change";
import { func } from "./local/function";
// ...
```

Turns into:

```typescript
 *  import Default from "no-change";
 *  import { func } from "./local/function.js";
// ...
```

## Install

```bash
$ npm i -D tsc-esm
```

### How to use

After you have compiled your TypeScript run it through this CLI.

```bash
$ tsc && tsc-esm index.js dist/*.js
```

## TODO

+ Do not add extension if it already exists
