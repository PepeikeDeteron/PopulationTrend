import React from 'react'
import styled from 'styled-components'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { ChartProps } from '@/@types'

type ContainerProps = {
  chartOptions?: Highcharts.Options
  populationData: ChartProps[]
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

const Container: React.VFC<ContainerProps> = (props) => {
  const { populationData } = props

  const newPopulationData: Highcharts.SeriesOptionsType[] = []

  // 都道府県名と人口をセットする
  populationData.map((data) => {
    newPopulationData.push({
      type: 'spline',
      name: data.prefName,
      data: data.value,
    })
  })

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
      categories: [
        '1960',
        '1965',
        '1970',
        '1975',
        '1980',
        '1985',
        '1990',
        '1995',
        '2000',
        '2005',
        '2010',
        '2015',
        '2020',
        '2025',
        '2030',
        '2035',
        '2040',
        '2045',
      ],
    },

    yAxis: {
      title: {
        text: '人口数',
        style: {
          fontWeight: 'bold',
        },
      },
      labels: {
        formatter: (data: any) => {
          return Highcharts.numberFormat(data.value, 0, '', ',')
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

    series: newPopulationData || [
      { type: 'spline', name: '都道府県名', data: [] },
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

  return <StyledComponent {...props} {...(containerProps as unknown)} />
}

export default React.memo(Container)
