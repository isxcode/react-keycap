import React, { useContext } from 'react'
import './style/Modal.scss'
import { ConfigContext } from '../provider/context'
import classNames from 'classnames'
import Button from '../button/Button'
import components from '../provider/components'

export type ModalCap = 'none' | 'cross' | 'white'

export interface BaseModalProps {
  cap?: ModalCap
  isOpen: boolean
  closeModal: () => void
  title?: string
}

export type ModalProps = BaseModalProps & React.HTMLAttributes<HTMLDivElement>;

const InternalModal: React.ForwardRefRenderFunction<unknown, ModalProps> = (props, ref) => {
  const {
    children,
    className,
    isOpen,
    closeModal,
    cap,
    title
  } = props

  const modalRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.MODAL)
  const modalCls = classNames(
    className,
    prefixCls,
    {
      [`${prefixCls}-${cap}`]: cap
    }
  )

  const ModalCross = () => {
    return cap === 'cross'
      ? <div className={'keycap-modal-title-div'}>
        <span className={'keycap-modal-title-span'}>
          {title}
        </span>
        <Button className={'keycap-modal-cross-btn'} cap={'text'} label={'x'} onClick={() => {
          closeModal()
        }}/>
      </div>
      : null
  }

  window.onkeydown = (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      closeModal()
    }
  }

  const ModalNode = () => {
    return isOpen
      ? (
        <div className={'keycap-modal-div'}>
          <ModalCross/>
          <div className={modalCls} ref={modalRef}>
            {children}
          </div>
        </div>
        )
      : null
  }

  return <>
    <ModalNode/>
  </>
}

const Modal = React.forwardRef<unknown, ModalProps>(InternalModal)

Modal.displayName = 'Modal'

Modal.defaultProps = {
  cap: 'none',
  isOpen: false,
  title: ''
}

export default Modal
