import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/input.scss'

export type InputType = 'default' | 'primary'

export interface BaseInputProps {
  label?: string
  which?: InputType
  icon?: React.ReactNode
}

export type InputProps = BaseInputProps & React.InputHTMLAttributes<HTMLInputElement>

const InternalInput: React.ForwardRefRenderFunction<unknown, InputProps> = (props, ref) => {

  const {
    className,
    children,
    which,
  } = props

  const inputRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls('input')
  const inputCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${which}`]: which,
    },
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
  which: 'default',
}

export default Input