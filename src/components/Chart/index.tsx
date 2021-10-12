import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type ContainerProps = {
  chartOptions: any // Highcharts.Options
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { chartOptions } = props

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  )
}

const StyledComponent = styled(Component)``

const Container: React.VFC<Partial<ContainerProps>> = () => {
  const chartOptions = {
    chart: {
      type: 'spline',
    },

    title: {
      text: '人口推移',
      style: {
        fontWeight: 'bold',
      },
    },

    subtitle: {
      text: '出典: RESAS-API',
    },

    xAxis: {
      title: {
        text: '年度',
        style: {
          fontWeight: 'bold',
        },
      },
      // TODO: API から取得する
      categories: ['1980', '1990', '2000', '2010', '2020'],
    },

    yAxis: {
      title: {
        text: '人口数',
        style: {
          fontWeight: 'bold',
        },
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'top',
      y: 25,
    },

    plotOption: {
      series: {
        pointStart: 1980,
        pointInterval: 10,
      },
    },

    // TODO: API から取得する
    series: [
      {
        name: 'テスト1',
        data: [69658, 97031, 119931, 137133, 154175],
      },
      {
        name: 'テスト2',
        data: [29851, 32490, 50282, 88121, 140434],
      },
      {
        name: 'テスト3',
        data: [19771, 20185, 24377, 32147, 59387],
      },
      {
        name: 'テスト4',
        data: [2169, 15112, 22452, 34400, 31227],
      },
      {
        name: 'テスト5',
        data: [11248, 8989, 11816, 18274, 18111],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 599,
          },
          chartOptions: {
            legend: {
              x: 15,
            },
          },
        },
      ],
    },
  }

  const containerProps = {
    chartOptions,
  }

  return <StyledComponent {...{ ...containerProps }} />
}

export default React.memo(Container)
