import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, Message } from '../../components/'

export default {
  title: 'components/Message'
} as Meta

const messageTemplate: Story<any> = () => (
  <>
    <Button cap={'default'} onClick={() => {
      Message.info('info')
    }}>info</Button>
    <Button cap={'default'} onClick={() => {
      Message.error('error')
    }}>error</Button>
    <Button cap={'default'} onClick={() => {
      Message.warning('warning')
    }}>warning</Button>
    <Button cap={'default'} onClick={() => {
      Message.success('success')
    }}>success</Button>
  </>
)

export const message = messageTemplate.bind({})
message.parameters = {
  controls: { hideNoControlsWarning: true }
}
