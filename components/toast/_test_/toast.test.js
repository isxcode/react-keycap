import React from 'react'
import Toast from '../toast'

test('test toast component', () => {

  Toast.error('test')
  Toast.info('test')
  Toast.warning('test')
  Toast.success('test')
})