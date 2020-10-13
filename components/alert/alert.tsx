import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/alert.scss'

export type AlertType = 'info' | 'error' | 'warning' | 'success'

export interface BaseAlertProps {
  which: AlertType
  message?: string
}

export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLDivElement>

const InternalAlter: React.ForwardRefRenderFunction<unknown, AlertProps> = (props, ref) => {

  const {
    className,
    which,
    message,
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

const Alert = React.forwardRef<unknown, AlertProps>(InternalAlter)

Alert.displayName = 'Alert'

Alert.defaultProps = {
  which: 'info',
  message: ''
}

export default Alert