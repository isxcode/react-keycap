<p align="center">
  <a href="https://github.com/isxcode/react-keycap" style="border-bottom: none !important;">
    <img src="https://gitee.com/isxcode/blogs-galaxy-images/raw/master/keycap/keycap.png" alt="react-keycap" width="500">
  </a>
</p>

<h1 align="center">
    React Keycap
</h1>

<h4 align="center">
    🧙 React rapid development integration framework.
</h4>

<div align="center" class="badge">

[![Github Build](https://github.com/isxcode/react-keycap/workflows/build/badge.svg?branch=latest)](https://github.com/isxcode/react-keycap/actions?query=workflow%3A%22build%22)
[![Npm Version](https://img.shields.io/npm/v/@isxcode/react-keycap)](https://www.npmjs.com/package/@isxcode/react-keycap)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/isxcode/react-keycap.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/isxcode/react-keycap/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/isxcode/react-keycap/badge.svg?branch=latest)](https://coveralls.io/github/isxcode/react-keycap?branch=latest)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fisxcode%2Freact-keycap.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fisxcode%2Freact-keycap?ref=badge_shield)

</div>

<div align="center" class="badge">

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/isxcode/react-keycap/blob/latest/CONTRIBUTING.md)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/isxcode/react-keycap)
[![Discussions on github](https://img.shields.io/badge/Discussions-on%20github-blueviolet)](https://github.com/isxcode/spring-oxygen/discussions)

</div>

<div align="center" class="badge">

[![Github Watch](https://img.shields.io/github/watchers/isxcode/react-keycap?style=social)](https://github.com/isxcode/react-keycap/watchers)
[![Github Star](https://img.shields.io/github/stars/isxcode/react-keycap?style=social)](https://github.com/isxcode/react-keycap/stargazers)
[![Github Fork](https://img.shields.io/github/forks/isxcode/react-keycap?style=social)](https://github.com/isxcode/react-keycap/network/members)

</div>

## 🐣 Introduce

[React Keycap](https://github.com/isxcode/react-keycap) is rapid development integration framework for [React](https://reactjs.org/).
**Important statement, enterprise-level development is recommended to be used with caution!**
For instructions on use, please check the [Docs](https://react-keycap.isxcode.com) carefully.
Welcome to develop and maintain together, please follow the [github development](https://github.com/isxcode/react-keycap/blob/latest/CONTRIBUTING.md) specification.

## 📦 Installation

#### For Npm

```bash
npm install @isxcode/react-keycap --save-dev
```

#### For Yarn

```bash
yarn add @isxcode/react-keycap --dev
```

## 🔨 Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Message } from '@isxcode/react-keycap'

const App = () => (
  <>
    <Button cap={'primary'} label={'Hello'} onClick={() => {
        Message.info('Welcome to use React-Keycap !!!')
    }} />
  </>
)

const mountNode = document.getElementById('root')
ReactDOM.render(<App/>, mountNode)
```

## 📒 Documentation

Check out the [Getting Started](https://react-keycap.isxcode.com) page for a quick overview.

##  👏 Contributing

Read our [contributing guide](https://github.com/isxcode/react-keycap/blob/latest/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to React Keycap.

***

#### Thanks for free JetBrains Open Source license

<a href="https://www.jetbrains.com/?from=react-keycap" target="_blank" style="border-bottom: none !important;">
    <img src="https://gitee.com/isxcode/blogs-galaxy-images/raw/master/jetbrains/jetbrains-3.png" height="100" alt="jetbrains"/>
</a>