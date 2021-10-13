import '@jest/globals'
import { getPopulation } from '@/pages/api/getPopulation'
import { getPrefectures } from '@/pages/api/getPrefectures'

describe('RESAS API 接続のテスト', () => {
  it('都道府県を取得できているか', async () => {
    const response = await getPrefectures()
    expect(response.length).toBe(47)
  })

  it('東京都の総人口を取得できているか (10年間隔, 2020年まで)', async () => {
    const response = await getPopulation(13, '東京都')
    expect(response.length).toBe(7)
  })
})
