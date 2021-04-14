import React from 'react'
import components from './components'

export const ConfigContext = React.createContext<any>({

  getPrefixCls: (suffixCls?: string) => {
    return suffixCls ? components.KEYCAP + `-${suffixCls}` : components.KEYCAP
  }
})
