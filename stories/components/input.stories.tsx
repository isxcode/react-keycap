import React from 'react'
import { Meta, Story } from '@storybook/react'

import { InputProps } from '../../components/input/input'
import { Input } from '../../components/'

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    cap: {
      description: 'input type',
      options: ['default', 'primary'],
      control: {
        type: 'select'
      }
    }
  }
} as Meta

const inputTemplate: Story<InputProps> = (args) => (
  <Input cap={args.cap}/>
)

export const input = inputTemplate.bind({})
input.args = {
  cap: 'default'
}
