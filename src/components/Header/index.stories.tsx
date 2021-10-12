import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Header from '.'

export default {
  title: 'components/Header',
  components: Header,
} as Meta

const Template: Story<ComponentProps<typeof Header>> = (props) => (
  <Header {...props} />
)

export const Default = Template.bind({})
Default.args = {
  title: '都道府県別 総人口推移グラフ',
}
