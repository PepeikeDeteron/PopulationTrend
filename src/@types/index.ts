// 都道府県一覧 ---------------------------------------------------------------------
export type PrefecturesProps = {
  prefCode: number
  prefName: string
}

export type PrefecturesResponse = {
  message: string | null | undefined
  result: PrefecturesProps[]
}

// 人口構成 -----------------------------------------------------------------------
export type PopulationProps = {
  year: number
  value: number
}

export type PopulationResponse = {
  message: string | null | undefined
  result: {
    boundaryYear: number
    data: {
      label: string
      data: PopulationProps[]
    }[]
  }
}

// チャート -----------------------------------------------------------------------
export type ChartProps = {
  prefName: PrefecturesProps['prefName']
  value: PopulationProps['value'][]
}
