import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/Input.scss'
import components from '../provider/components'

export type InputCap = 'default' | 'line';

export interface BaseInputProps {
  cap?: InputCap
  label?: string
}

export type InputProps = BaseInputProps & React.InputHTMLAttributes<HTMLInputElement>

const InternalInput: React.ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {
  const {
    className,
    children,
    label,
    cap
  } = props

  const inputRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.INPUT)
  const inputCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${cap}`]: cap
    }
  )

  const inputNode = (
    <input {...props} className={inputCls} ref={inputRef} placeholder={label}>
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
