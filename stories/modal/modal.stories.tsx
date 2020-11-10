import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, Modal } from '../../components/index'
import { ModalProps } from '../../components/modal/modal'

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ModalProps> = (args) => <>
  <Button>
    modal
  </Button>
  <Modal {...args}>
    show me
  </Modal>
</>

export const Default = Template.bind({})
Default.args = {
  cap: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  cap: 'primary',
}