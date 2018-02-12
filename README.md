# react-template
Template for React projects

## Description
This project is meant to contain basic setup for a react applications

The app has basic features just to test the tools in the project

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

### `babel-preset-es2015` `babel-preset-react` `babel-preset-stage-0`
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
