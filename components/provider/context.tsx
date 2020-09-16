import React from 'react'

export const ConfigContext = React.createContext<any>({

  getPrefixCls: (suffixCls?: string) => {
    return suffixCls ? `keycap-${suffixCls}` : 'keycap'
  },
})