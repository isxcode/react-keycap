import React, { useContext } from 'react'
import classNames from 'classnames'
import { ConfigContext } from '../provider/context'
import './style/alert.scss'
import components from '../provider/components'

export type AlertCap = 'info' | 'error' | 'warning' | 'success'

export interface BaseAlertProps {
  cap: AlertCap
  message?: string
}

export type AlertProps = BaseAlertProps & React.HTMLAttributes<HTMLDivElement>;

const InternalAlter: React.ForwardRefRenderFunction<unknown, AlertProps> = (props, ref) => {
  const {
    className,
    cap,
    message
  } = props

  const alterRef = (ref as any) || React.createRef<HTMLElement>()

  const { getPrefixCls } = useContext(ConfigContext)
  const prefixCls = getPrefixCls(components.ALTER)
  const alterCls = classNames(
    prefixCls,
    className,
    {
      [`${prefixCls}-${cap}`]: cap
    }
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
  cap: 'info',
  message: ''
}

export default Alert
