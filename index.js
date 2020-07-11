// 如何通过入口引用其他的组件库

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj } }

let _KLayout = _interopRequireDefault(require('./components/layout/KLayout'))

Object.defineProperty(exports, 'KLayout', {
  enumerable: true,
  get: function get() {
    return _KLayout['default']
  }
})
