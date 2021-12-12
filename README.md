# react-template ⛔️ DEPRECATED

<p align="center">
  <a href="http://unmaintained.tech/">
    <img src="http://unmaintained.tech/badge.svg" alt="No Maintenance Intended">
  </a>
</p>
<p align="center">
  <a href="https://travis-ci.org/rareyesdev/react-template">
    <img src="https://travis-ci.org/rareyesdev/react-template.svg?branch=develop" alt="Build Status">
  </a>
</p>

## Deprecation note
This project was an experiment to understand the complexities behind a custom Webpack setup.

## Description
This project is meant to contain basic setup for react applications

The app has basic features just to test the tools in the project

## Table of Contents

<!-- TOC -->

- [react-template](#react-template)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Bootstrap](#bootstrap)
    - [Theming](#theming)
  - [React Bootstrap](#react-bootstrap)
  - [Server](#server)
  - [Eslint](#eslint)
    - [Airbnb Configuration Overrides](#airbnb-configuration-overrides)
  - [Stylelint](#stylelint)
    - [Standard Configuration Overrides](#standard-configuration-overrides)
  - [Git](#git)
  - [Webpack](#webpack)
    - [Webpack Dev Server](#webpack-dev-server)
    - [Optimizations](#optimizations)
    - [Webpack Bundle Analysis](#webpack-bundle-analysis)
  - [Contribution Guidelines](#contribution-guidelines)
    - [README.md](#readmemd)
  - [Modules](#modules)
    - [`autoprefixer`](#autoprefixer)
    - [`babel-core`](#babel-core)
    - [`babel-eslint`](#babel-eslint)
    - [`babel-loader`](#babel-loader)
    - [`babel-plugin-istanbul`](#babel-plugin-istanbul)
    - [`babel-preset-env`,`babel-preset-react`,`babel-preset-stage-0`](#babel-preset-envbabel-preset-reactbabel-preset-stage-0)
    - [`bootstrap`](#bootstrap)
    - [`classnames`](#classnames)
    - [`compression`](#compression)
    - [`connect-history-api-fallback`](#connect-history-api-fallback)
    - [`cross-env`](#cross-env)
    - [`css-loader`](#css-loader)
    - [`express`](#express)
    - [`fast-sass-loader`](#fast-sass-loader)
    - [`file-loader`](#file-loader)
    - [`html-webpack-exclude-assets-plugin`](#html-webpack-exclude-assets-plugin)
    - [`html-webpack-plugin`](#html-webpack-plugin)
    - [`inline-manifest-webpack-plugin`](#inline-manifest-webpack-plugin)
    - [`mini-css-extract-plugin`](#mini-css-extract-plugin)
    - [`morgan`](#morgan)
    - [`node-sass`](#node-sass)
    - [`postcss-loader`](#postcss-loader)
    - [`prop-types`](#prop-types)
    - [`react`,`react-dom`](#reactreact-dom)
    - [`react-loadable`](#react-loadable)
    - [`react-router-dom`](#react-router-dom)
    - [`reactstrap`](#reactstrap)
    - [`remove-source-webpack-plugin`](#remove-source-webpack-plugin)
    - [`rotating-file-stream`](#rotating-file-stream)
    - [`shx`](#shx)
    - [`style-loader`](#style-loader)
    - [`url-loader`](#url-loader)
    - [`webpack`](#webpack)
    - [`webpack-cli`](#webpack-cli)
    - [`webpack-merge`](#webpack-merge)
  - [Modules (for development)](#modules-for-development)
    - [`chai`](#chai)
    - [`duplicate-package-checker-webpack-plugin`](#duplicate-package-checker-webpack-plugin)
    - [`eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`](#eslint-eslint-config-airbnb-eslint-plugin-import-eslint-plugin-jsx-a11y-eslint-plugin-react)
    - [`husky`](#husky)
    - [`mocha`](#mocha)
    - [`nodemon`](#nodemon)
    - [`nyc`](#nyc)
    - [`stylelint`](#stylelint)
    - [`stylelint-config-standard`](#stylelint-config-standard)
    - [`stylelint-order`](#stylelint-order)
    - [`webpack-bundle-analyzer`](#webpack-bundle-analyzer)
    - [`webpack-dev-server`](#webpack-dev-server)
  - [Modules (deprecated)](#modules-deprecated)
    - [`postcss-cssnext`](#postcss-cssnext)
    - [`postcss-import`](#postcss-import)
    - [`resolve-url-loader`](#resolve-url-loader)

<!-- /TOC -->

## Bootstrap

### Theming

https://bootstrap.build/app/v4.0/

## React Bootstrap

https://reactstrap.github.io/

## Server

In production this app uses an Express server configured to serve files using the static middleware.

- Compression:
Compression middleware is enabled by default. This setup is enough for most applications; for a high-traffic website in production check [this](https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression)

## Eslint

### Airbnb Configuration Overrides

- **`"react/forbid-prop-types": false`**
Using PropTypes.object and PropTypes.array make sense to me. Sometime PropTypes.arrayOf and PropTypes.shape are too verbose

- **`"arrow-body-style": 0`**
arrow-body-style should be used with care. Omitting curly braces might look good but in the long term it causes a lot of changes when used to create functional components. A lot of times the component needs additional code and we end up changing it to use curly braces. It better to maintain functional component consistent from the beginning. Other uses of inline arrow functions look better if we omit the curly braces

## Stylelint

### Standard Configuration Overrides
**Some** CSS conventions where implemented following [this](http://codeguide.co) article.

## Git
Git hooks are enabled for checking JS and CSS against linter rules. Also, it will run tests before pushing

## Webpack

### Webpack Dev Server
To make WDS visible to other devices in the network we need to specify `devServer.host` using computer's name/IP. One solution is to use `0.0.0.0` or `require('os').hostname().toLowerCase()` but the last one will not allow opening the page in `localhost`

### Optimizations

- **`mini-css-extract-plugin`:**
We disable CSS extractiion in development to improve build speed (`style-loader` is used instead). Check [this](https://stackoverflow.com/questions/43403603/why-is-style-loader-used-as-a-fallback-with-webpacks-extractsass-plugin) for more

- **Hot Module Replacement:**
  This allows to update CSS (and also JS but this requires additional effort and is not enabled) wihtout reloading the application. It requires hashing to be [turned of](https://github.com/webpack/webpack-dev-server/issues/377)

- **Common Chunks:**
  Splitting the application code into more than one file allows better caching mechanisms. This app contains 3 chunks:
  - _runtime~bundle_: Webpack bootstraping code
  - _vendors~bundle_: All 3rd party libraries
  - _bundle_: Application code

  > `webpack.HashedModuleIdsPlugin` is used to make sure chunks IDs don't change when other chunks are added

  > Since _manifest_ is small it might be inlined into the HTML file using `html-webpack-inline-chunks-plugin`. This will be opted out for now

  _Additional info:_
  - [dynamic-vendor-bundling-in-webpack](https://jeremygayed.com/dynamic-vendor-bundling-in-webpack-528993e48aab)
  - [code-splitting](https://webpack.js.org/guides/code-splitting/)
  - [commons-chunk-plugin](https://webpack.js.org/plugins/commons-chunk-plugin/)
  - [caching](https://webpack.js.org/guides/caching/)

- **Code Splitting:**
  The app implements code splitting at the module level, this gives granularity control over it. Code splitting should only be neccessary when certain sections of the app grow to big. It should not be abused

  _Additional info:_
  - [webpack-code-splitting](https://webpack.js.org/guides/code-splitting/)
  - [react-router-code-splitting](https://reacttraining.com/react-router/web/guides/code-splitting)
  - [react-loadable](https://github.com/jamiebuilds/react-loadable)

- **Embed Small Files:**
Using `url-loader` we can embed assets such as images, fonts and other files directly into the current file. This means that `url` CSS function or `require`/`import` JS statments will return the `base64` version of the file content instead of returning the file's URL. This feature is enabled in production only because otherwise it would hide some resources form Webpack output during development. This behavior is controlled using a file size so only small files are embeded. Big files will be resolved using `file-loader` and `url`,`require`,`import` will return URLs pointing to the file as ususal
  ```javascript
  {
    loader: 'url-loader',
    options: {
      limit: 8192,
      fallback: 'file-loader',
      name: '[name]__[hash:7].[ext]'
    }
  }
  ```

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

**Considerations:**

- `purifycss-webpack`: Is an interesting option to remove CSS by scanning code. It's fragile when components use classes by concatenating strings so it's not an option for now

- [Critical Rendering Path](https://survivejs.com/webpack/styling/eliminating-unused-css/#critical-path-rendering): Working as expected on [critical-rendering-path](https://github.com/ramonrf/react-template/tree/experimental/critical-rendering-path) branch. Not enabled by default because:
  - This is an expensive operation during build
  - It doesn't make sense when there is no content generated in the server (No server-side rendering)

### Webpack Bundle Analysis
The [Official Webpack Analyzer](http://webpack.github.io/analyse/) runs using `stats.json` from `npm run webpack-create-stats`

Some other tools can be used to analyze Webpack output. [This article](https://survivejs.com/webpack/optimizing/build-analysis/) contains a good reference for this.

From that article these options were reviewed, they look interesting but not enough to add them to the project:
- [`webpack-jarvis`](https://www.npmjs.com/package/webpack-jarvis): Web dashboard with information about the build process
- [`webpack-monitor`](http://webpackmonitor.com/): Web dashboard with information about the build process. Gives recomendations
- [`webpack-runtime-analyzer`](https://www.npmjs.com/package/webpack-runtime-analyzer): Very promising web dashboard, the only issue is that doesn't seem to work with Webpack 3
- [`webpack-dashboard`](https://github.com/FormidableLabs/webpack-dashboard): Customizes Webpack console output

## Contribution Guidelines

### README.md
Use [Markdown TOC](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) Visual Studio Code extension

~~Use [markdown-toc](https://github.com/jonschlinkert/markdown-toc#cli) to update TOC.
In the project root folder execute: `markdown-toc README.md`~~

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

### `compression`
Node.js compression middleware. Used by Express for asset compression

### `connect-history-api-fallback`
Middleware to proxy requests through a specified index page, useful for Single Page Applications that utilise the HTML5 History API

### `cross-env`
For settings Node environment variables in a cross-platform manner

### `css-loader`
Webpack loader for `.css` files

### `express`
Server

### `fast-sass-loader`
SASS loader for webpack

### `file-loader`
Webpack loader for files `(png|svg|jpg|gif)`

### `html-webpack-exclude-assets-plugin`
Enhances `html-webpack-plugin` functionality by adding the `{excludeAssets: RegExp | [RegExp]}` option to allow you to exclude assets. [Issue](https://github.com/webpack/webpack/issues/1967)

### `html-webpack-plugin`
For creating `index.html` automatically from a template file and inject JS and CSS bundles

### `inline-manifest-webpack-plugin`
Inlines Webpack's runtime with a script tag to save an http request. Cause webpack's runtime always change between every build, it's better to split the runtime code out for long-term caching

### `mini-css-extract-plugin`
Allows to extract all CSS files to a CSS bundle instead of bundling it with the JS code

### `morgan`
Logger middleware for Express

### `node-sass`
Provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass. Required by `fast-sass-loader`

### `postcss-loader`
~~Webpack loader for files `.css` files. Used after `css-loader` to plugin `postcss-cssnext` parser~~

Allows to process CSS using several plugins. Used after the CSS is parsed by the `fast-sass-loader` to apply vendor prefixes using `autoprefixer`

### `prop-types`
Runtime type checking for React props

### `react`,`react-dom`
React development

### `react-loadable`
HOC for easy Code Splitting using Webpack

### `react-router-dom`
React client router

### `reactstrap`
React Bootstrap 4 components

### `remove-source-webpack-plugin`
A plugin for webpack to remove the source that is not needed. [Issue](https://github.com/jamesjieye/html-webpack-exclude-assets-plugin/issues/9)

### `rotating-file-stream`
Creates a `stream.Writable` to a file which is rotated. Rotation behaviour can be deeply customized

### `shx`
Wrapper around ShellJS Unix commands, providing an easy solution for simple Unix-like, cross-platform commands in npm package scripts.
Used for deleting files in a cross-platform manner

### `style-loader`
Adds CSS to the DOM by injecting a `<style>` tag

### `url-loader`
Loads files as `base64` encoded URL. Has `file-loader` as fallback option

### `webpack`
Module bundler

### `webpack-cli`
For using webpack from CLI

### `webpack-merge`
Merge webpack configuration with ease

## Modules (for development)

### `chai`
Assertion framework. See `expect` usage in example tests

### `duplicate-package-checker-webpack-plugin`
Webpack plugin that warns when your bundle contains multiple versions of the same package

### `eslint` `eslint-config-airbnb` `eslint-plugin-import` `eslint-plugin-jsx-a11y` `eslint-plugin-react`
Linter, Airbnb configuration to `eslint` and plugins used by the configuration

### `husky`
Add pre-commit and pre-push hooks to check linter and tests

### `mocha`
Test runner

### `nodemon`
- Restarts webpack-dev-server when webpack's configuration changes in development mode
- Restarts express server when any file changes in production mode

### `nyc`
Istanbul's state of the art command line interface. Reports code coverage in several formats

### `stylelint`
Linter for CSS

### `stylelint-config-standard`
Standard set of rules for `stylelint`

### `stylelint-order`
Set of rules to order CSS property declarations

### `webpack-bundle-analyzer`
Display webpack bundle statistics

### `webpack-dev-server`
For running the app in development with hot reloading

## Modules (deprecated)
This section contains documentation for modules that were previously used

### `postcss-cssnext`
Parser for [CssNext](http://cssnext.io/features/) syntax

> Replaced in favor of SCSS because Bootstrap gives SCSS files that can be compiled in place. This
allow us to use the theme SCSS variables everywhere in the app

### `postcss-import`
Allows to `@import './styles/some-file.css'` inside other CSS files

> Not needed anymore since SCSS is now doing all the CSS processing

### `resolve-url-loader`
Webpack loader that resolves relative paths in url() statements based on the original source file. This is required so we can specify relative URLs inside SCSS files.
See [sass-loader problems with url()](https://github.com/webpack-contrib/sass-loader#problems-with-url).
`resolve-url-loader` requires Source Maps enabled in `sass-loader` to work, then, we also need to enable Source Maps for `postcss-loader` otherwise it will ignore the previous Source Map and a warning will be generated ([postcss-loader source maps](https://github.com/postcss/postcss-loader#sourcemap))
