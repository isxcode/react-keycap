import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/Button.scss'
import components from '../provider/components'

export type ButtonCap = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'font';

export interface BaseButtonProps {
  cap?: ButtonCap;
  label?: string;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    className,
    children,
    cap,
    label
  } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.BUTTON)
  const buttonCls = classNames(prefixCls, className, {
    [`${prefixCls}-${cap}`]: cap
  })

  const buttonNode = label == null
    ? (
      <button {...props} className={buttonCls} ref={buttonRef}>
        {children}
      </button>)
    : (
      <button {...props} className={buttonCls} ref={buttonRef}>
        {label}
      </button>)

  return <>
    {buttonNode}
  </>
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton)

Button.displayName = 'Button'

Button.defaultProps = {
  cap: 'default'
}

export default Button
