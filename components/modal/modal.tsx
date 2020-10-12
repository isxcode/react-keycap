import React, { useContext } from 'react'
import './style/modal.scss'
import { ConfigContext } from '../provider/context'
import classNames from 'classnames'

export interface BaseModalProps {
  isOpen: boolean
}

export type ModalProps = BaseModalProps & React.HTMLAttributes<HTMLDivElement>

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {

  const {
    children,
    className,
    isOpen
  } = props

  const modalRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const modalContainCls = classNames(
    className,
    getPrefixCls('modal-contain'),
  )

  const modalNode = isOpen ? (
    <div className={getPrefixCls('modal')} ref={modalRef}>
      <div className={modalContainCls}>
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
  isOpen: true,
}

export default Modal