import axios from 'axios'
import { PrefecturesProps, PrefecturesResponse } from '@/@types'

export const getPrefectures = async (): Promise<
  Readonly<PrefecturesProps[]>
> => {
  const response = await axios.get<Readonly<PrefecturesResponse>>(
    'https://opendata.resas-portal.go.jp/api/v1/prefectures',
    {
      method: 'GET',
      headers: {
        'X-API-KEY': `${process.env.RESAS_API_KEY}`,
      },
    }
  )

  const prefecturesData = response?.data?.result

  return prefecturesData
}
