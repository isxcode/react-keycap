import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../Button'

test('test components component', () => {
  const mountNode = document.createElement('div')

  const buttonNode = (
    <Button cap={'default'}>
      keycap
    </Button>
  )

  ReactDOM.render(buttonNode, mountNode)
})
