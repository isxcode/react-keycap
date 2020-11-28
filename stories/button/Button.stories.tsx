import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../../components/index'
import { ButtonProps } from '../../components/button/button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: { description: '按钮标签' },
    cap: { description: '按钮类型' },
    size: { description: '按钮大小' },
    color: { description: '按钮颜色', control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (<Button {...args}>hello</Button>)

export const DefaultButton = Template.bind({})
DefaultButton.args = {
  cap: 'default',
  label: 'hello',
  color: 'yellow',
  size: 'large',
}

export const GhostButton = Template.bind({})
GhostButton.args = {
  cap: 'ghost',
}

export const DashedButton = Template.bind({})
DashedButton.args = {
  cap: 'dashed',
}

export const DangerButton = Template.bind({})
DangerButton.args = {
  cap: 'danger',
}

export const FontButton = Template.bind({})
FontButton.args = {
  cap: 'font',
}

export const Primary = Template.bind({})
Primary.args = {
  cap: 'primary',
}