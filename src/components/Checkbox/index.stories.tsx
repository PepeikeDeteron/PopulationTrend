import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Checkbox from '.'

export default {
  title: 'components/Checkbox',
  components: Checkbox,
} as Meta

const Template: Story<ComponentProps<typeof Checkbox>> = (props) => (
  <Checkbox {...props} />
)

export const Default = Template.bind({})
Default.args = {
  content: '東京都',
}
