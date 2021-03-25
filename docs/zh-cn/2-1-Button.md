### Button

- 修改 `src/index.tsx`

```
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Toast } from '@isxcode/react-keycap'

const App = () => (
  <>
    <Button cap={'primary'} label={'Hello'} onClick={() => {
      Toast.info('Welcome to use React-Keycap !!!')
    }} />
  </>
)

const mountNode = document.getElementById('root')
ReactDOM.render(<App/>, mountNode)

```

### 运行项目

```
npm start
```