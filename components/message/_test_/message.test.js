import Toast from '../message'

test('test message component', () => {
  Toast.error('keycap')
  sleep(1100)
  Toast.info('keycap')
  sleep(1100)
  Toast.warning('keycap')
  sleep(1100)
  Toast.success('keycap')
  sleep(1100)
})

const sleep = function (time) {
  const startTime = new Date().getTime() + parseInt(time, 10)
  // eslint-disable-next-line no-empty
  while (new Date().getTime() < startTime) {}
}
