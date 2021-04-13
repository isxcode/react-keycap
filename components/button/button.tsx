import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/button.scss'

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'font';

export interface BaseButtonProps {
  cap?: ButtonType;
  test: string;
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const {
    className,
    children,
    cap
  } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('btn')

  const buttonCls = classNames(prefixCls, className, {
    [`${prefixCls}-${cap}`]: cap
  })

  const buttonNode = (
    <button {...props} className={buttonCls} ref={buttonRef}>
      {children}
    </button>)

  return <>{buttonNode}</>
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton)

Button.displayName = 'Button'

Button.defaultProps = {
  cap: 'default'
}

export default Button
