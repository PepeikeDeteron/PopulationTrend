// 都道府県一覧 ---------------------------------------------------------------------
export type Prefectures = {
  prefCode: number
  prefName: string
}

export type PrefecturesResponse = {
  message: string | null | undefined
  result: Prefectures[]
}

// 人口構成 -----------------------------------------------------------------------
export type Population = {
  year: number
  value: number
}

export type PopulationResponse = {
  message: string | null | undefined
  result: {
    boundaryYear: number
    data: {
      label: string
      data: Population[]
    }[]
  }
}

// チャート -----------------------------------------------------------------------
export type Chart = {
  prefName: Prefectures['prefName']
  value: Population['value'][]
}
