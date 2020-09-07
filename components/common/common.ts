/**
 * 返回随机颜色
 */
function getCustomColor(): string {
  return (
    '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
  )
}

/**
 * 获取应用对应的className
 */
export function getPrefixCls(suffixCls?: string): string {

  return suffixCls ? `keycap-${suffixCls}` : 'keycap'
}