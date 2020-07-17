// // 如何通过入口引用其他的组件库
//
// let _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')
//
// let _KLayout = _interopRequireDefault(require('./components/layout/KLayout'))
//
// Object.defineProperty(exports, 'KLayout', {
//   enumerable: true,
//   get: function get() {
//     return _KLayout['default']
//   }
// })


import * as React from 'react'

function DEMO() {
  console.log('zujian cshi')
}

export default DEMO