import { Utils } from '../utils'

test('test utils component', () => {
  console.log(Utils.getCustomColor())
  console.log(Utils.parseUrlSearch('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=ts%20%7B%7D%20%E5%8A%A8%E6%80%81%E6%B7%BB%E5%8A%A0%E5%B1%9E%E6%80%A7%E5%AF%B9%E8%B1%A1&fenlei=256&oq=ts%2520map%25E7%25B1%25BB%25E5%259E%258B&rsv_pq=b67c6041002f7367&rsv_t=53c4hO7SAU3k9sldLnSS%2BW9EAm2H7tGe8wtnrKRuEY4LR0LnUuWfAVcUcYI&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_btype=t&inputT=14821&rsv_sug3=75&rsv_sug1=58&rsv_sug7=100&rsv_sug2=0&rsv_sug4=14975'))
})
