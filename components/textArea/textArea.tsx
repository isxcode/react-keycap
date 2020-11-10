import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/textArea.scss'

export type TextAreaType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'font'

export interface BaseTextAreaProps {
  label?: string
  cap?: TextAreaType
}

export type TextAreaProps = BaseTextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>

const InternalTextArea: React.ForwardRefRenderFunction<unknown, TextAreaProps> = (props, ref) => {

  const {
    className,
    children,
    cap,
  } = props

  const textAreaRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const prefixCls = getPrefixCls('textArea')

  const textAreaCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${cap}`]: cap,
    },
  )

  const textAreaNode = (
    <textarea {...props} className={textAreaCls} ref={textAreaRef}>
      {children}
    </textarea>
  )

  return <>
    {textAreaNode}
  </>
}

const TextArea = React.forwardRef<unknown, TextAreaProps>(InternalTextArea)

TextArea.displayName = 'TextArea'

TextArea.defaultProps = {
  cap: 'default',
}

export default TextArea