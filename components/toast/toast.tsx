import React from 'react'
import ReactDOM from 'react-dom'
import Alert from '../alert/alert'
import './style/toast.scss'

const defaultDuration = 1000

function createToast(notice: any) {

  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(
    <div className={'keycap-toast-div'}>
      <Alert className={'keycap-toast-alert'} which={notice.type} message={notice.content} />
    </div>, div)

  setTimeout(() => {
    ReactDOM.unmountComponentAtNode(div)
    document.body.removeChild(div)
  }, notice.duration)

}

const notice = (type: string, content: string, duration: number) => {

  return createToast({ type, content, duration })
}

export default {

  info(message: string) {
    return notice('info', message, defaultDuration)
  },

  error(message: string) {
    return notice('error', message, defaultDuration)
  },

  warning(message: string) {
    return notice('warning', message, defaultDuration)
  },

  success(message: string) {
    return notice('success', message, defaultDuration)
  },
}
