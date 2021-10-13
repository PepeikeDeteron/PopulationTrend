import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ChartProps } from '@/@types'

type ContainerProps = {
  chartOptions?: Highcharts.Options
  prefectureCode: (prefCode: number) => void
}

type Props = {
  className?: string
} & ContainerProps

const Component: React.VFC<Props> = (props) => {
  const { chartOptions, prefectureCode } = props

  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        prefectureCode={prefectureCode}
      />
    </>
  )
}

const StyledComponent = styled(Component)``

const Container: React.VFC<ContainerProps> = () => {
  const population: ChartProps[] = []
  const populationData: Highcharts.SeriesOptionsType[] = []

  // 都道府県名と人口をセットする
  for (const p of population) {
    populationData.push({
      type: 'spline',
      name: p.prefName,
      data: p.value,
    })
  }

  const chartOptions = {
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

    series: populationData,

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

  return <StyledComponent {...{ ...(containerProps as any) }} />
}

export default React.memo(Container)
