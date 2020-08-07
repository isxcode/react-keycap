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
export function getClassName(componentType: string, whichList: string[], className: string): string {

  let nameSymbol = 'keycap-' + componentType
  let classNameResult = nameSymbol

  if (whichList != null) {
    whichList.forEach((val, idx, array) => {
      if (val != null) {
        classNameResult = classNameResult + ' ' + nameSymbol + '-' + val
      }
    })
  }

  if (className != null) {
    classNameResult = classNameResult + ' ' + className
  }

  return classNameResult
}