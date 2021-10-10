import axios from 'axios'
import { Prefectures, PrefecturesResponse } from '@/@types'

export const getPrefectures = async (): Promise<Readonly<Prefectures[]>> => {
  const response = await axios.get<Readonly<PrefecturesResponse>>(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': `${process.env.RESAS_API_KEY}`,
      },
    }
  )

  console.log(response.data.result)
  return response.data.result
}
