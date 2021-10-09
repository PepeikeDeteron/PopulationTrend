import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Button from '.'

export default {
  title: 'components/Button',
  components: Button,
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as Meta

const Template: Story<ComponentProps<typeof Button>> = (props) => (
  <Button {...props} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
}
