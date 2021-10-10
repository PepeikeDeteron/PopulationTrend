import '@jest/globals'
import { getPrefectures } from '@/pages/api/getPrefectures'

describe('RESAS API 接続のテスト', () => {
  it('都道府県を取得できているか', async () => {
    const response = await getPrefectures()
    expect(response.length).toBe(47)
  })
})
