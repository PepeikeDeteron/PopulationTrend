import React, { ComponentProps } from 'react'
import { Meta, Story } from '@storybook/react'
import Chart from '.'

export default {
  title: 'components/Chart',
  components: Chart,
} as Meta

const Template: Story<ComponentProps<typeof Chart>> = (props) => (
  <Chart {...props} />
)

export const Default = Template.bind({})
Default.args = {
  populationData: [
    {
      prefName: '東京都',
      value: [
        9683802, 10869244, 11408071, 11673554, 11618281, 11829363, 11855563,
        11773605, 12064101, 12576601, 13159388, 13515271, 13732951, 13845936,
        13882538, 13851782, 13758624, 13606683,
      ],
    },
    {
      prefName: '大阪府',
      value: [
        5504746, 6657189, 7620480, 8278925, 8473446, 8668095, 8734516, 8797268,
        8805081, 8817166, 8865245, 8839469, 8732289, 8526202, 8262029, 7962983,
        7649229, 7335352,
      ],
    },
    {
      prefName: '京都府',
      value: [
        1993403, 2102808, 2250087, 2424856, 2527330, 2586574, 2602460, 2629592,
        2644391, 2647660, 2636092, 2610353, 2573772, 2509875, 2430849, 2338843,
        2238226, 2136807,
      ],
    },
  ],
}
