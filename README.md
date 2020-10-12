<p align="center">
  <a href="https://github.com/ispong/react-keycap">
    <img alt="react-keycap" width="500" src="https://gitee.com/ispong/blog-images/raw/master/design/keycap.png">
  </a>
</p>

<h1 align="center">
    React Keycap
</h1>

<h4 align="center">
    React rapid development component library.
</h4>

<div align="center">

[![Github Build](https://github.com/ispong/react-keycap/workflows/build/badge.svg?branch=latest)](https://github.com/ispong/react-keycap/actions?query=workflow%3A%22build%22)
[![Npm Version](https://img.shields.io/npm/v/@ispong/react-keycap)](https://www.npmjs.com/package/@ispong/react-keycap)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/ispong/react-keycap.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/ispong/react-keycap/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/ispong/react-keycap/badge.svg?branch=latest)](https://coveralls.io/github/ispong/react-keycap?branch=latest)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fispong%2Freact-keycap.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fispong%2Freact-keycap?ref=badge_shield)

</div>

<div align="center">

[![Wiki](https://img.shields.io/badge/Wiki-docs-important)](https://github.com/ispong/react-keycap/wiki)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/ispong/react-keycap/blob/main/CONTRIBUTING.md)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ispong/react-keycap)

</div>

<div align="center">

[![Github Watch](https://img.shields.io/github/watchers/ispong/react-keycap?style=social)](https://github.com/ispong/react-keycap/watchers)
[![Github Star](https://img.shields.io/github/stars/ispong/react-keycap?style=social)](https://github.com/ispong/react-keycap/stargazers)
[![Github Fork](https://img.shields.io/github/forks/ispong/react-keycap?style=social)](https://github.com/ispong/react-keycap/network/members)

</div>

## 🐣 Intro

[React Keycap](https://github.com/ispong/react-keycap) is rapid development component library for [React](https://reactjs.org/).
**Important statement, enterprise-level development is recommended to be used with caution!**
For instructions on use, please check the [Wiki](https://github.com/ispong/react-keycap/wiki) carefully.
Welcome to develop and maintain together, please follow the [github development](https://github.com/ispong/react-keycap/blob/main/CONTRIBUTING.md) specification.

## 📦 Installation

- for Npm

```shell script
npm install @ispong/react-keycap --save-dev
```

- for Yarn

```shell script
yarn add @ispong/react-keycap --dev
```

## 🔨 Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Alter } from '@ispong/react-keycap'

const App = () => (
  <>
    <Alter which={'primary'} label={'Hello'} />
  </>
)

const mountNode = document.getElementById('root')
ReactDOM.render(<App/>, mountNode)
```

***

#### Thanks for free JetBrains Open Source license

<a href="https://www.jetbrains.com/?from=react-keycap" target="_blank"><img src="https://gitee.com/ispong/blog-images/raw/master/idea/jetbrains-3.png" height="100" alt="jetbrains"/></a>