import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../components'

test('test components component', () => {
  const mountNode = document.createElement('div')

  const buttonNode = (
    <Button>test</Button>
  )

  ReactDOM.render(buttonNode, mountNode)
})
