import Toast from '../toast'

test('test message component', () => {
  Toast.error('test')
  Toast.info('test')
  Toast.warning('test')
  Toast.success('test')
})
