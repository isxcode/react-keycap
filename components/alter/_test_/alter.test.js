import React from 'react';
import ReactDOM from 'react-dom'
import Alter from '../alter'

test('test alter component', () => {

  const mountNode = document.createElement('div')

  const buttonNode = (
    <Alter>test</Alter>
  )

  ReactDOM.render(buttonNode, mountNode)
})