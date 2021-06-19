import React from 'react'
import ReactDOM from 'react-dom'
import Dropdown from '../Dropdown'

test('test components component', () => {
  const mountNode = document.createElement('div')

  const buttonNode = (
    <Dropdown cap={'default'}>
      keycap
    </Dropdown>
  )

  ReactDOM.render(buttonNode, mountNode)
})
