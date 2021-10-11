import axios from 'axios'
import { Population, PopulationResponse } from '@/@types'

export const getPopulation = async (
  prefCode: number
): Promise<Readonly<Population[]>> => {
  const response = await axios.get<Readonly<PopulationResponse>>(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${prefCode}`,
    {
      method: 'GET',
      headers: {
        'X-API-KEY': `${process.env.RESAS_API_KEY}`,
      },
    }
  )

  const extraction = response.data.result.data[0].data

  // 提示されたワイヤーフレームを参考に、10年間隔 & 2020年度までのデータを取得する
  const processingYears = extraction.filter((data) => {
    return data.year % 10 === 0 && data.year <= 2020
  })

  // 人口のみ抽出する
  // const populationData = processingYears.map((data) => {
  //   return data.value
  // })

  console.log(processingYears)
  return processingYears
}
