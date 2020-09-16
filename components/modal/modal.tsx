import React, { useEffect, useState } from 'react'
import './style/modal.scss'

export interface BaseModalProps {
  isOpen?: boolean
  onAfterOpen?: () => void
  onRequestClose?: () => void
}

export type ModalProps = Partial<BaseModalProps & React.HTMLAttributes<HTMLDivElement>>

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {

  const [user, setUser] = useState(0)

  const {
    children,
    isOpen,
    onRequestClose,
    onAfterOpen
  } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const modalNode = isOpen ? (
    'ceshi'
  ) : (
    'xxx'
  )

  function demo(){

  }

  // useEffect(() => {
  //   demo()
  // }, [buttonRef])

  return <>
    {modalNode}
  </>
}

const Modal = React.forwardRef<unknown, ModalProps>(InternalModal)

export default Modal