# react-template

<p align="center">
  <a href="https://travis-ci.org/ramonrf/react-template">
    <img src="https://travis-ci.org/ramonrf/react-template.svg?branch=develop" alt="Build Status">
  </a>
</p>

## Description
This project is meant to contain basic setup for react applications

The app has basic features just to test the tools in the project

## Table of Contents

<!-- TOC -->

- [react-template](#react-template)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Modules](#modules)
    - [`autoprefixer`](#autoprefixer)
    - [`babel-core`](#babel-core)
    - [`babel-eslint`](#babel-eslint)
    - [`babel-loader`](#babel-loader)
    - [`babel-plugin-istanbul`](#babel-plugin-istanbul)
    - [`babel-preset-env`,`babel-preset-react`,`babel-preset-stage-0`](#babel-preset-envbabel-preset-reactbabel-preset-stage-0)
    - [`bootstrap`](#bootstrap)
    - [`classnames`](#classnames)
    - [`cross-env`](#cross-env)
    - [`css-loader`](#css-loader)
    - [`del-cli`](#del-cli)
    - [`express`](#express)
    - [`extract-text-webpack-plugin`](#extract-text-webpack-plugin)
    - [`file-loader`](#file-loader)
    - [`html-webpack-plugin`](#html-webpack-plugin)
    - [`morgan`](#morgan)
    - [~~`postcss-cssnext`~~](#postcss-cssnext)
    - [~~`postcss-import`~~](#postcss-import)
    - [`node-sass`](#node-sass)
    - [`postcss-loader`](#postcss-loader)
    - [`prop-types`](#prop-types)
    - [`react`,`react-dom`](#reactreact-dom)
    - [`react-router-dom`](#react-router-dom)
    - [`reactstrap`](#reactstrap)
    - [`rotating-file-stream`](#rotating-file-stream)
    - [`sass-loader`](#sass-loader)
    - [`style-loader`](#style-loader)
    - [`uglifyjs-webpack-plugin`](#uglifyjs-webpack-plugin)
    - [`webpack`](#webpack)
    - [`webpack-bundle-analyzer`](#webpack-bundle-analyzer)
    - [`webpack-merge`](#webpack-merge)
  - [Modules (for development)](#modules-for-development)
    - [`chai`](#chai)
    - [`eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`](#eslint-eslint-config-airbnb-eslint-plugin-import-eslint-plugin-jsx-a11y-eslint-plugin-react)
    - [`mocha`](#mocha)
    - [`nyc`](#nyc)
    - [`stylelint`](#stylelint)
    - [`stylelint-config-standard`](#stylelint-config-standard)
    - [`webpack-dev-server`](#webpack-dev-server)
  - [Eslint](#eslint)
    - [Airbnb Configuration Overrides](#airbnb-configuration-overrides)
  - [Webpack](#webpack)
    - [Optimizations](#optimizations)
    - [Webpack Bundle Analysis](#webpack-bundle-analysis)
  - [Contribution Guidelines](#contribution-guidelines)
    - [README.md](#readmemd)

<!-- /TOC -->

## Modules

### `autoprefixer`
PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use

### `babel-core`
JS transpiler for using modern ECMAScript code

### `babel-eslint`
Needed for `eslint` to parse advanced `babel` constructions

### `babel-loader`
Webpack loader for `.js` and `.jsx` files

### `babel-plugin-istanbul`
Add instrumenting code to ES6 source code. This is later used by a reporting service such as karma or mocha (through nyc)

### `babel-preset-env`,`babel-preset-react`,`babel-preset-stage-0`
Presets for the transpiler to recognize modern ECMAScript constructions

### `bootstrap`
Bootstrap 4 UI Framework (full framework with SCSS for compiling locally)

### `classnames`
For using CSS Modules inside components. See [bind](https://www.npmjs.com/package/classnames#alternate-bind-version-for-css-modules-)

### `cross-env`
For settings Node environment variables in a cross-platform manner

### `css-loader`
Webpack loader for `.css` files

### `del-cli`
For deleting files in a cross-platform manner

### `express`
Server

### `extract-text-webpack-plugin`
Allows to extract all CSS files to a CSS bundle instead of bundling it with the JS code

### `file-loader`
Webpack loader for files `(png|svg|jpg|gif)`

### `html-webpack-plugin`
For creating `index.html` automatically from a template file and inject JS and CSS bundles

### `morgan`
Logger middleware for Express

### ~~`postcss-cssnext`~~
Parser for [CssNext](http://cssnext.io/features/) syntax

> Replaced in favor of SCSS because Bootstrap gives SCSS files that can be compiled in place. This
allow us to use the theme SCSS variables everywhere in the app

### ~~`postcss-import`~~
Allows to `@import './styles/some-file.css'` inside other CSS files

> Not needed anymore since SCSS is now doing all the CSS processing

### `node-sass`
Provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. Required by `sass-loader`

### `postcss-loader`
~~Webpack loader for files `.css` files. Used after `css-loader` to plugin `postcss-cssnext` parser~~

Allows to process CSS using several plugins. Used after the CSS is parsed by the `sass-loader` to apply vendor prefixes using `autoprefixer`

### `prop-types`
Runtime type checking for React props

### `react`,`react-dom`
React development

### `react-router-dom`
React client router

### `reactstrap`
React Bootstrap 4 components

### `rotating-file-stream`
Creates a `stream.Writable` to a file which is rotated. Rotation behaviour can be deeply customized

### `sass-loader`
Loads a Sass/SCSS file and compiles it to CSS

### `style-loader`
Adds CSS to the DOM by injecting a `<style>` tag

### `uglifyjs-webpack-plugin`
Makes JS code smaller using several techniques

### `webpack`
Module bundler

### `webpack-bundle-analyzer`
Display statistics over a webpack bundle

### `webpack-merge`
Merge webpack configuration with ease

## Modules (for development)

### `chai`
Assertion framework. See `expect` usage in example tests

### `eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`
Linter, Airbnb configuration to `eslint` and plugins used by the configuration

### `mocha`
Test runner

### `nyc`
Istanbul's state of the art command line interface. Reports code coverage in several formats

### `stylelint`
Linter for CSS

### `stylelint-config-standard`
Standard set of rules for `stylelint`

### `webpack-dev-server`
For running the app in development with hot reloading

## Eslint
> Some rules are manually disabled in configuration files because they might cause issue with their respective parsers (example `eslint-disable comma-dangle` in webpack configuration file)

### Airbnb Configuration Overrides

- **`"react/forbid-prop-types": false`**
Using PropTypes.object and PropTypes.array make sense to me. Sometime PropTypes.arrayOf and PropTypes.shape are too verbose

- **`"arrow-body-style": 0`**
arrow-body-style should be used with care. Omitting curly braces might look good but in the long term it causes a lot of changes when used to create functional components. A lot of times the component needs additional code and we end up changing it to use curly braces. It better to maintain functional component consistent from the beginning. Other uses of inline arrow functions look better if we omit the curly braces

## Webpack

### Optimizations

- **`extract-text-webpack-plugin`:**
We disable CSS extractiion in development to improve build speed (`style-loader` is used instead). Check [this](https://stackoverflow.com/questions/43403603/why-is-style-loader-used-as-a-fallback-with-webpacks-extractsass-plugin) for more

- **Source Maps:**
`devtool: 'inline-source-map'` in `webpack.config.js` is responsible for enabling source maps. This way we get nice error messages pointing to the real file and not the bundled file

- **Minify:**
  - *Dead Code Elimination*: Webpack's built-in tree shaking works on ES6 module syntax only. Babel's defaults settings will compile ES6 modules to CommonJS modules, leaving nothing for Webpack to work with. Therefore we need to disable module compilation in babel preset. [Link](https://stackoverflow.com/questions/47663486/webpack-3-babel-and-tree-shaking-not-working)
  ```javascript
  {
    presets: [
      ['env', { modules: false }],
    ],
  }
  ```

- **Disable `npm-link`:**
This might help speed the compilation process when [symlinks](https://docs.npmjs.com/cli/link) are not used. Source: [Webpack Documentation - Build Performance](https://webpack.js.org/guides/build-performance/#resolving)
```javascript
resolve: {
  symlinks: false
}
```

### Webpack Bundle Analysis
Some tools can be used to analyze Webpack output. [This article](https://survivejs.com/webpack/optimizing/build-analysis/) contains a good reference for this.

From that article these two options were reviewed, they look interesting but not enough to add them to the project:
- [`webpack-jarvis`](https://www.npmjs.com/package/webpack-jarvis): Web dashboard with information about the build process
- [`webpack-monitor`](http://webpackmonitor.com/): Web dashboard with information about the build process. Gives recomendations
- [`webpack-runtime-analyzer`](https://www.npmjs.com/package/webpack-runtime-analyzer): Very promising web dashboard, the only issue is that doesn't seem to work with Webpack 3
- [`webpack-dashboard`](https://github.com/FormidableLabs/webpack-dashboard): Customizes Webpack console output

## Contribution Guidelines

### README.md
Use [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) Visual Studio Code extension

Old method (only for reference):
> Use [markdown-toc](https://github.com/jonschlinkert/markdown-toc#cli) to update TOC
> In the project root folder execute: `markdown-toc README.md`
