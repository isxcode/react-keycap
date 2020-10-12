import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/alter.scss'

export type AlterType = 'error' | 'warning' | 'success'

export interface BaseAlterProps {
  message?: string
  which?: AlterType
}

export type AlterProps = BaseAlterProps & React.HtmlHTMLAttributes<HTMLButtonElement>

const InternalAlter: React.ForwardRefRenderFunction<unknown, AlterProps> = (props, ref) => {

  const {
    className,
    which,
    message
  } = props

  const alterRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)

  const prefixCls = getPrefixCls('alter')

  const alterCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${which}`]: which,
    },
  )

  const alterNode = (
    <div className={alterCls} ref={alterRef}>
      {message}
    </div>
  )

  return <>
    {alterNode}
  </>
}

const Alter = React.forwardRef<unknown, AlterProps>(InternalAlter)

Alter.displayName = 'Alter'

Alter.defaultProps = {
  which: 'success',
}

export default Alter