import React from 'react'
import classNames from 'classnames'
import './button.scss'
import { getPrefixCls } from '../common/common'

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger'
export type ButtonSize = 'large' | 'middle' | 'small'

export interface BaseButtonProps {
  label?: string
  which?: ButtonType
  size?: ButtonSize
  icon?: React.ReactNode
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {

  const {
    className,
    children,
    which,
    icon
  } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const prefixCls = getPrefixCls('btn')

  const buttonCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${which}`]: which,
    },
  )

  const iconNode = (
    icon ? (
      <span className={`${prefixCls}-icon`}>
        {icon}
      </span>
    ) : ('')
  )

  const buttonNode = (
    <button {...props} className={buttonCls} ref={buttonRef}>
      {iconNode}
      {children}
    </button>
  )

  return <>
    {buttonNode}
  </>
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton)

Button.displayName = 'Button'

Button.defaultProps = {
  which: 'default',
}

export default Button