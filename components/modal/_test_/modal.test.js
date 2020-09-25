import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../modal/modal'

test('test modal component', () => {

  const mountNode = document.createElement('div')

  const buttonNode = (
    <Modal>
      <div>
        show modal
      </div>
    </Modal>
  )

  ReactDOM.render(buttonNode, mountNode)
})