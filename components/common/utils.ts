/**
 * 返回随机颜色
 */
export class Utils {
  static getCustomColor () {
    return (
      '#' + ('00000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
    )
  }

  /**
     * 解析props.location.search中的请求参数
     */
  static parseUrlSearch (search: string) {
    const reqParams:{ [key: string]: any } = {}
    search.substring(1).split('&').map(metaParam => {
      const paramPair = metaParam.split('=')
      reqParams[paramPair[0]] = paramPair[1]
    })
    return reqParams
  }
}
