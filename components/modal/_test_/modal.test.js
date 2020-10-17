import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../modal/modal'

test('test modal component', () => {

  // const [isOpen, setIsOpen] = useState(true)

  function closeModal() {

  }

  const mountNode = document.createElement('div')

  const modalNode = (
    <Modal isOpen={true} closeModal={closeModal}>
      <div>
        test modal
      </div>
    </Modal>
  )

  ReactDOM.render(modalNode, mountNode)
})