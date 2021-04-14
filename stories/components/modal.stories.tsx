import React from 'react'
import { Meta, Story } from '@storybook/react'

import { Button, Modal } from '../../components/'
import { ModalProps } from '../../components/modal/modal'

export default {
  title: 'components/Modal',
  component: Modal,
  argTypes: {
    cap: {
      description: 'modal type',
      options: ['none', 'cross'],
      control: {
        type: 'select'
      }
    },
    isOpen: {
      description: 'isOpen',
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    closeModal: {
      description: 'is open'
    },
    hasCross: {
      description: 'hasCross',
      defaultValue: true,
      control: {
        type: 'boolean'
      }
    },
    title: {
      description: 'title'
    }

  }
} as Meta

const modalTemplate: Story<ModalProps> = (args) => (
  <>
    <Modal isOpen={args.isOpen} closeModal={() => {}} hasCross={args.hasCross}>
      <span>
        keycap
      </span>
    </Modal>
     <Button onClick={() => { args.isOpen = true }}>
      click
     </Button>
  </>
)

export const modal = modalTemplate.bind({})
modal.parameters = {
  title: 'keycap'
}
