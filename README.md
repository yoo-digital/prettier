# YOO Prettier
_This repo contains a reusable prettier configuration for projects @ YOO._

## Introduction
The published package can be found in our npm organization [here (@yoo-digital)](https://www.npmjs.com/org/yoo-digital).

## Goal
The goal of this repository is to improve the developer experience @ YOO, by offering a centralized repository containing files that are reused in the different projects. It should ensure that these projects follow a set of common and defined standards.

## Motivation
Every developer can and should contribute to this repository. It should be in everyone's interest to improve the developer experience @ YOO. Amendments or changes can be introduced in our monthly guild meetings.

## Using the Configuration
Reference the configuration in your package.json:

```json
{
  "prettier": "@yoo-digital/prettier"
}
```

## Extending the Configuration
If needed, you can override the configuration with any necessary project-specific overrides:

```ts
// .prettierrc.mjs, .prettierrc.js
import prettierConfig from '@yoo-digital/prettier';

export default {
  ...prettierConfig,
  // overrides
};
```

```json
// .prettierrc, .prettierrc.json
"@yoo-digital/prettier"
```

For a complete overview of configuration options please refer to the [official documentation](https://prettier.io/docs/en/configuration).

## Ignoring files
Make sure to define a `.prettierignore` file at the root of your project, to ignore files to be formatted:

```
.next
assets
build
dist
lib
public
```

## Features
The configuration contains a set of plugins:

* [@prettier/plugin-php](https://github.com/prettier/plugin-php) to add support for PHP files
* [@destination/prettier-plugin-twig](https://github.com/wearedestination/prettier-plugin-twig) to add support for Twig files
* [prettier-plugin-organize-attributes](https://github.com/NiklasPor/prettier-plugin-organize-attributes) to sort HTML element attributes in HTML files
* [prettier-plugin-organize-imports](https://github.com/simonhaenisch/prettier-plugin-organize-imports) to sort import declarations in JS and TS files
* [prettier-plugin-css-order](https://github.com/Siilwyn/prettier-plugin-css-order) to sort CSS styles in a standardised order