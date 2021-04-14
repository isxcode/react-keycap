import React from 'react'
import { Meta, Story } from '@storybook/react'

import { ButtonProps } from '../../components/button/button'
import { Button } from '../../components/'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    cap: {
      options: ['default', 'primary', 'ghost', 'dashed', 'danger', 'font'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta

const buttonTemplate: Story<ButtonProps> = (args) => (
  <Button {...args}>
    keycap
  </Button>
)

export const button = buttonTemplate.bind({})
button.args = {
  cap: 'default'
}
