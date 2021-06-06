1. Init from [Create React App](https://create-react-app.dev/)

- typescript + npm

```bash
npx create-react-app demo --template typescript --use-npm
cd demo
npm start
```

![img](https://gitee.com/isxcode/blogs-galaxy-images/raw/master/keycap-docs/126aef0e75f4d34b6d1ac3d585e64a8.png)

2. Add webpack (Optional)

- [Create App](https://createapp.dev/)

1. Add node-sass

```bash
npm install --save-dev node-sass@4.14.1
#or
npm install --save-dev node-sass@4.14.1 --sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
```

2. Add dependency

- For npm

```bash
npm install @isxcode/react-keycap --save-dev
```

- For yarn

```bash
yarn add @isxcode/react-keycap --dev
```

3. Use react-keycap

- edit file `src/index.tsx`

```ts
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

![img](https://gitee.com/isxcode/blogs-galaxy-images/raw/master/keycap-docs/91c955b4d709664017b92a8c9b66492.png)