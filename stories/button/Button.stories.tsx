import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '../../components/index'
import { ButtonProps } from '../../components/button/button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (<Button {...args}>hello</Button>)

export const Default = Template.bind({})
Default.args = {
  which: 'default',
}

export const Primary = Template.bind({})
Primary.args = {
  which: 'primary',
}