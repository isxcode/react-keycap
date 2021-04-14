import React from 'react'
import Input from '../input'
import ReactDOM from 'react-dom'

test('test input component', () => {
  const mountNode = document.createElement('div')

  const inputNode = (
    <Input cap={'default'}/>
  )

  ReactDOM.render(inputNode, mountNode)
})
