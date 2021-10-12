import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import CheckboxList from '.'

export default {
  title: 'components/CheckboxList',
  components: CheckboxList,
} as Meta

const Template: Story<ComponentProps<typeof CheckboxList>> = (props) => (
  <CheckboxList {...props} />
)

export const Default = Template.bind({})
Default.args = {}
