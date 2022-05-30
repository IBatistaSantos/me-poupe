import { AverageResult } from '../models'

export interface AverageCalculation {
  execute: (params: AverageCalculation.Params) => AverageCalculation.Result
}

export namespace AverageCalculation {
  export type Params = {
    firstNote: number
    secondNote: number
  }

  export type Result = AverageResult
}
