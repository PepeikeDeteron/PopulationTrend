import axios from 'axios'
import { Population, ChartProps, PopulationResponse } from '@/@types'

export const getPopulation = async (
  prefCode: number,
  prefName: string // eslint-disable-line
): Promise<Readonly<Population[] | ChartProps[] | number[]>> => {
  const response = await axios.get<Readonly<PopulationResponse>>(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': `${process.env.RESAS_API_KEY}`,
      },
    }
  )

  const extraction = response?.data?.result?.data[0]?.data

  // 提示されたワイヤーフレームを参考に、10年間隔 & 2020年度までのデータを取得する
  // const processingYears = extraction.filter((data) => {
  //   return data.year % 10 === 0 && data.year <= 2020
  // })

  // 人口のみ抽出する
  const populationData = extraction.map((data) => {
    return data.value
  })

  //! extraction を return して、Chart で年度と人口をそれぞれ map 抽出
  return populationData
}
