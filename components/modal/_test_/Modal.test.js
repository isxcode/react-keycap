import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../modal/Modal'

test('test modal component', () => {
  let isOpen = true
  function closeModal () {
    isOpen = false
  }
  const mountNode = document.createElement('div')

  const modalNode = (
    <Modal isOpen={isOpen} closeModal={closeModal} hasCross={true}>
      <div>
        test modal
      </div>
    </Modal>
  )

  ReactDOM.render(modalNode, mountNode)

  closeModal()
})
