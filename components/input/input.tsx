import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/input.scss'
import components from '../provider/components'

export type InputCap = 'default' | 'primary'

export interface BaseInputProps {
  cap?: InputCap
  // label?: string
  // icon?: React.ReactNode
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
  const prefixCls = getPrefixCls(components.INPUT)
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
