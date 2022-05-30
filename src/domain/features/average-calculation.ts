
export interface AverageCalculation {
  execute: (params: AverageCalculation.Params) => Promise<AverageCalculation.Result>
}

export namespace AverageCalculation {
  export type Params = {
    numberOne: number
    numberTwo: number
  }

  export type Result = {
    numberOne: number
    numberTwo: number
    average: number
  }
}
