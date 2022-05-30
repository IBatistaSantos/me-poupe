import { AverageCalculation } from '@/domain/features/average-calculation'

export class AverageCalculationService implements AverageCalculation {
  async execute (params: AverageCalculation.Params): Promise<AverageCalculation.Result> {
    const { numberOne, numberTwo } = params

    const average = Math.round((numberOne + numberTwo) / 2).toFixed(2)

    return {
      numberOne,
      numberTwo,
      average: Number(average)
    }
  }
}
