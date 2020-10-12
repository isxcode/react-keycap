import React from 'react'
import ReactDOM from 'react-dom'
import './style/toast.scss'
import Alter from '../alter/alter'

const div = document.createElement('div')

function addNotice(notice: any) {
  if (notice.duration > 0) {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }, notice.duration)
  }
}

function createToast(notice: any) {

  document.body.appendChild(div)
  ReactDOM.render(<Alter className={'keycap-toast'} which={notice.type} message={notice.content} />, div)

  addNotice(notice)
}

const notice = (type: string, content: string, duration: number = 2000) => {

  return createToast({ type, content, duration })
}

export default {
  error(message: string) {
    return notice('error', message, 2000)
  },
  info(message: string) {
    return notice('info', message, 2000)
  },
}
