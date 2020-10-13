import React from 'react';
import ReactDOM from 'react-dom'
import Alert from '../alert'

test('test alter component', () => {

  const mountNode = document.createElement('div')

  const buttonNode = (
    <Alert>test</Alert>
  )

  ReactDOM.render(buttonNode, mountNode)
})