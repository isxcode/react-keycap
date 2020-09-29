import React, { useContext } from 'react'
import './style/modal.scss'
import { ConfigContext } from '../provider/context'
import classNames from 'classnames'

export interface BaseModalProps {
  isOpen?: boolean
}

export type ModalProps = BaseModalProps & React.HTMLAttributes<HTMLDivElement>

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {

  const {
    isOpen,
    children,
    className
  } = props

  const modalRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const prefixCls = getPrefixCls('modal')

  const modalCls = classNames(
    prefixCls,
    className
  )

  const modalNode = isOpen ? (
    <div className={modalCls} ref={modalRef}>

      <div>

      </div>

      {children}

    </div>
  ) : null

  return <>
    {modalNode}
  </>
}

const Modal = React.forwardRef<unknown, ModalProps>(InternalModal)

Modal.displayName = 'Modal'

Modal.defaultProps = {
  isOpen: false,
}

export default Modal