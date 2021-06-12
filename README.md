# pure-typescript-project-template

Simple TypeScript template equipped with basic tools to get you started in your project. It has a basic configuration in place but depending on what you want to build, you might want to adjust it to your needs.

- Runtime environment: [Node](https://nodejs.org/en/) ([`ts-node`](https://www.npmjs.com/package/ts-node)), Browser
- Testing framework: [Jest](https://jestjs.io/) ([`ts-jest`](https://www.npmjs.com/package/ts-jest))
- Code quality enforcers: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- Code editor: [VSCode](https://code.visualstudio.com/)

Make sure your VSCode has following plugins installed:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

I've added `ts-node`, `@types/node` and `tsconfig-paths` as `dependencies` in case you wanted to run your app in production with `ts-node`.

If that's not the case, you'll need uninstall these three packages, and install them again as `devDependencies`. However, if you actually want to run your app in production with `ts-node`, keep in mind that:

- to elevate `tsconfig.json` `baseUrl` and make `ts-node` resolve your absolute paths in a correct way, you need to give it `--require tsconfig-paths/register` argument
- you should run your app with `--transpile-only` flag (`ts-node --transpile-only app.ts`) - this will result with `ts-node` **not** generating type information, which makes memory footprint smaller...
- ...but if, at the same time, you want to use [`reflect-metadata`](https://www.npmjs.com/package/reflect-metadata) package in production (with experimental support for decorators), `--transpile-only` flag can cause issues - if that's your use case, consider compiling your app to `.js` and running it with a regular `node` command

## Setup

To use this repository as a template follow [this guide](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template).

Once inside the repo, run:

```shell
nvm use
npm install
```
