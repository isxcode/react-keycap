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
      defaultValue: 'string',
      options: ['primary', 'default'],
      control: {
        type: 'select'
      }
    },
    label: {
      control: {
        type: 'string'
      },
      description: 'input label'
    }
  }
} as Meta

const inputTemplate: Story<InputProps> = (args) => (
  <Input label={args.label}/>
)

export const input = inputTemplate.bind({})
input.args = {
}
