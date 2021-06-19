import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/Button.scss'
import components from '../provider/components'

export type ButtonCap = 'default' | 'primary' | 'text' | 'ghost' | 'dashed' | 'danger';
export type ButtonSize = 'large' | 'middle' | 'small';

export interface BaseButtonProps {
  cap?: ButtonCap;
  label?: string;
  size?: ButtonSize;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    className,
    children,
    cap,
    label,
    size
  } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.BUTTON)
  const buttonCls = classNames(
    prefixCls,
    {
      [`${prefixCls}-${cap}`]: cap,
      [`${prefixCls}-${size}`]: size
    },
    className)

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
  cap: 'default',
  size: 'middle'
}

export default Button
