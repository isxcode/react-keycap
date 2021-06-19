#### Start a new React project

- [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

##### typescript + yarn

```bash
npx create-react-app keycap-demo --use-npm --template typescript
cd keycap-demo
```

#### Add react-keycap dependency

> Recommend to use `registry=https://registry.npmjs.org/` repository

```bash
npm install @isxcode/react-keycap --save-dev
```

#### Demo and Use react-keycap

- edit file `src/index.tsx`

```bash
vim src/index.tsx
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Button , Message } from '@isxcode/react-keycap'

const KeycapDemo = () => {
  return <Button cap={'primary'} label={'Hello'} onClick={() => Message.info('Welcome to use React-Keycap !!!')}/>;
}

ReactDOM.render(
  <React.StrictMode>
    <KeycapDemo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

##### Start project

```bash
npm start
```

- http://localhost:3000

![img](https://gitee.com/isxcode/blogs-galaxy-images/raw/master/keycap-docs/keycap-demo.png)