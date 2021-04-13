import React, { CSSProperties, useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/button.scss'

// 使用枚举 列出所有cap类型
export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'font'

export interface BaseButtonProps {
  label?: string
  // 类型
  cap?: ButtonType
  // icon
  icon?: React.ReactNode
}

export type ButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

const InternalButton: React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
  const { className, children, cap, icon, label, color } = props

  const buttonRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const prefixCls = getPrefixCls('btn')

  const buttonCls = classNames(prefixCls, className, {
    [`${prefixCls}-${cap}`]: cap
  })

  const iconNode = icon ? <span className={`${prefixCls}-icon`}>{icon}</span> : ''

  const buttonStyle: CSSProperties = {
    background: color
  }

  const buttonNode = label
    ? (
    <button {...props} style={buttonStyle} className={buttonCls} ref={buttonRef}>
      {label}
    </button>
      )
    : (
    <button {...props} style={buttonStyle} className={buttonCls} ref={buttonRef}>
      {iconNode}
      {children}
    </button>
      )

  return <>{buttonNode}</>
}

const Button = React.forwardRef<unknown, ButtonProps>(InternalButton)

Button.displayName = 'Button'

Button.defaultProps = {
  cap: 'default'
}

export default Button
