import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/input.scss'

export type InputType = 'default' | 'primary'

export interface BaseInputProps {
  label?: string
  cap?: InputType
  icon?: React.ReactNode
}

export type InputProps = BaseInputProps & React.InputHTMLAttributes<HTMLInputElement>

const InternalInput: React.ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {
  const {
    className,
    children,
    cap
  } = props

  const inputRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('input')
  const inputCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${cap}`]: cap
    }
  )

  const inputNode = (
    <input {...props} className={inputCls} ref={inputRef}>
      {children}
    </input>
  )

  return <>
    {inputNode}
  </>
}

const Input = React.forwardRef<unknown, InputProps>(InternalInput)

Input.displayName = 'Input'

Input.defaultProps = {
  cap: 'default'
}

export default Input
