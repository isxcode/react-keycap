import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../button'

test('test button component', () => {

  const mountNode = document.createElement('div')

  const buttonNode = (
    <Button>test</Button>
  )

  ReactDOM.render(buttonNode, mountNode)
})