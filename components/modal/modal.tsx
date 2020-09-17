import React, { useContext } from 'react'
import './style/modal.scss'
import { ConfigContext } from '../provider/context'
import classNames from 'classnames'

export interface BaseModalProps {
  isOpen?: boolean
}

export type ModalProps = BaseModalProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {

  const {
    children,
    isOpen,
    className
  } = props

  const modalRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const prefixCls = getPrefixCls('modal')

  const modalCls = classNames(
    prefixCls,
  )

  const modalNode = isOpen ? (
    <div className={modalCls}>
      <div className={'keycap-modal-portal'}>
        {children}
      </div>
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