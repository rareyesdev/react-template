# react-template
Template for React projects

## Description
This project is meant to contain basic setup for a react applications

The app has basic features just to test the tools in the project

## Table of Contents

<!-- TOC -->

- [react-template](#react-template)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Modules](#modules)
    - [`classnames`](#classnames)
    - [`react` `react-dom`](#react-react-dom)
  - [Modules (for development)](#modules-for-development)
    - [`babel-core`](#babel-core)
    - [`babel-eslint`](#babel-eslint)
    - [`babel-loader`](#babel-loader)
    - [`babel-preset-env` `babel-preset-react` `babel-preset-stage-0`](#babel-preset-env-babel-preset-react-babel-preset-stage-0)
    - [`cross-env`](#cross-env)
    - [`css-loader`](#css-loader)
    - [`del-cli`](#del-cli)
    - [`eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`](#eslint-eslint-config-airbnb-eslint-plugin-import-eslint-plugin-jsx-a11y-eslint-plugin-react)
    - [`extract-text-webpack-plugin`](#extract-text-webpack-plugin)
    - [`file-loader`](#file-loader)
    - [`html-webpack-plugin`](#html-webpack-plugin)
    - [`postcss-cssnext`](#postcss-cssnext)
    - [`postcss-loader`](#postcss-loader)
    - [`webpack`](#webpack)
    - [`webpack-bundle-analyzer`](#webpack-bundle-analyzer)
    - [`webpack-dev-server`](#webpack-dev-server)
  - [Notes](#notes)
    - [`extract-text-webpack-plugin`](#extract-text-webpack-plugin-1)
    - [Source Maps](#source-maps)
  - [Contribution Guidelines](#contribution-guidelines)
    - [README.md](#readmemd)

<!-- /TOC -->

## Modules

### `classnames`
For using CSS Modules inside components. See [bind](https://www.npmjs.com/package/classnames#alternate-bind-version-for-css-modules-)

### `react` `react-dom`
React development

## Modules (for development)

### `babel-core`
JS transpiler for using modern ECMAScript code

### `babel-eslint`
Needed for `eslint` to parse advanced `babel` constructions

### `babel-loader`
Webpack loader for `.js` and `.jsx` files

### `babel-preset-env` `babel-preset-react` `babel-preset-stage-0`
Presets for the transpiler to recognize modern ECMAScript constructions

### `cross-env`
For settings Node environment variables in a cross-platform manner

### `css-loader`
Webpack loader for `.css` files

### `del-cli`
For deleting files in a cross-platform manner

### `eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`
Linter, Airbnb configuration to `eslint` and plugins used by the configuration

### `extract-text-webpack-plugin`
Allows to extract all CSS files to a CSS bundle instead of bundling it with the JS code

### `file-loader`
Webpack loader for files `(png|svg|jpg|gif)`

### `html-webpack-plugin`
For creating `index.html` automatically from a template file and inject JS and CSS bundles

### `postcss-cssnext`
Parser for [CssNext](http://cssnext.io/features/) syntax

### `postcss-loader`
Webpack loader for files `.css` files. Used after `css-loader` to plugin `postcss-cssnext` parser

### `webpack`
Module bundler

### `webpack-bundle-analyzer`
Display statistics over a webpack bundle

### `webpack-dev-server`
For running the app in development with hot reloading

## Notes

### `extract-text-webpack-plugin`
No fallback is used here because we want the CSS file in all environments. Sometimes this is disabled in `development` (becausse its faster not to do it) and `style-loader` is used instead. this is explained [here](https://stackoverflow.com/questions/43403603/why-is-style-loader-used-as-a-fallback-with-webpacks-extractsass-plugin)

### Source Maps
`devtool: 'inline-source-map'` in `webpack.config.js` is responsible for enabling source maps. This way we get nice error messages pointing to the real file and not the bundled file

### Eslint
- Some rules are manually disabled in configuration files because they might cause issue with their respective parsers (example `eslint-disable comma-dangle` in webpack configuration file)

## Contribution Guidelines

### README.md
Use [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) Visual Studio Code extension

Old method (only for reference):
> Use [markdown-toc](https://github.com/jonschlinkert/markdown-toc#cli) to update TOC
> In the project root folder execute: `markdown-toc README.md`
