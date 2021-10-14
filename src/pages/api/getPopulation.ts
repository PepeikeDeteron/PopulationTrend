import axios from 'axios'
import { PopulationProps, PopulationResponse } from '@/@types'

export const getPopulation = async (
  prefCode: number,
  prefName: string // eslint-disable-line
): Promise<Readonly<PopulationProps[] | number[]>> => {
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

  // 人口のみ抽出する
  const populationData = extraction.map((data) => {
    return data.value
  })

  return populationData
}
