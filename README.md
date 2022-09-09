# @inficen/eslint-plugin-no-fc &middot; [![npm version](https://badge.fury.io/js/@inficen%2Feslint-plugin-no-fc.svg)](https://badge.fury.io/js/@inficen%2Feslint-plugin-no-fc)

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `@inficen/eslint-plugin-no-fc`:

```sh
npm install @inficen/eslint-plugin-no-fc --save-dev
```

## Usage

Add `@inficen/no-fc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["@inficen/no-fc"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "@inficen/no-fc/no-fc": "warn"
  }
}
```

If you haven't already, you will need to setup ESLint to work with typescript using [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

```
npm install --save-dev @typescript-eslint/parser
```

A minimal configuration would look as follows

```JSON
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "@inficen/no-fc"],
  "rules": {
    "@inficen/no-fc/no-fc": "warn"
  }
}
```

## Supported Rules

- [`no-fc`](./docs/rules/no-fc.md)
