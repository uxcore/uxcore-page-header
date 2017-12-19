## uxcore-page-header

React page header

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-page-header.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-page-header
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-page-header.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-page-header
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-page-header.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-page-header?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-page-header.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-page-header
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-page-header.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-page-header#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-page-header.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-page-header.svg
[sauce-url]: https://saucelabs.com/u/uxcore-page-header


### Development

```sh
git clone https://github.com/uxcore/uxcore-page-header
cd uxcore-page-header
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-page-header
cd uxcore-page-header
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/page-header

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|prefixCls|String|No|kuma-page-header|类名前缀，不使用 kuma 主题时使用|
|className|String|No| | 增加额外的 class，用于自定义 |
|crumb|React Element|No| |面包屑区域，接受一个标准的 uxcore-crumb 实例|
|title|React Element|No| |标题区域|
|action|React Element|No| |动作面板区域，默认右对齐|
|content|React Element|No| |内容区域|
|extraContent|React Element|No| |额外内容区域，默认右对齐|
|tab|React Element|No| |选项卡区域，接受一个标准的 uxcore-tabs 实例|

