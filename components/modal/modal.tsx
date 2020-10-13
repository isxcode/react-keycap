import React, { useContext } from 'react'
import './style/modal.scss'
import { ConfigContext } from '../provider/context'
import classNames from 'classnames'
import Button from '../button/button'

export type ModalType = 'none' | 'cross'

export interface BaseModalProps {
  which?: ModalType
  isOpen: boolean
  closeModal: () => void
  hasCross?: boolean
}

export type ModalProps = BaseModalProps & React.HTMLAttributes<HTMLDivElement>

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {

  const {
    children,
    className,
    isOpen,
    closeModal,
    which,
    hasCross
  } = props

  const modalRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('modal')
  const modalCls = classNames(
    className,
    prefixCls,
    {
      [`${prefixCls}-${which}`]: which,
    },
  )

  function HasCross() {
    return hasCross ?
      <Button className={'keycap-modal-cross-btn'} which={'font'} label={'x'} onClick={() => {
        closeModal()
      }} /> : null
  }

  const modalNode = isOpen ? (
    <div className={'keycap-modal-div'}>
      <HasCross />
      <div className={modalCls} ref={modalRef}>
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
  which: 'none',
  isOpen: true,
  hasCross: true,
}

export default Modal