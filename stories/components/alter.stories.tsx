import React from 'react'
import { Meta, Story } from '@storybook/react'

import { AlertProps } from '../../components/alert/alert'
import { Alert } from '../../components/'

export default {
  title: 'components/Alert',
  component: Alert,
  argTypes: {
    cap: {
      description: 'alert type',
      options: ['info', 'error', 'warning', 'success'],
      control: {
        type: 'select'
      }
    },
    message: {
      description: 'alert label'
    }
  }
} as Meta

const alterTemplate: Story<AlertProps> = (args) => (
  <Alert cap={args.cap} message={args.message}/>
)

export const alert = alterTemplate.bind({})
alert.args = {
  cap: 'info',
  message: 'info'
}
