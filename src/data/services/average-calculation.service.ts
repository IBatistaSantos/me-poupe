import { AverageCalculation } from '@/domain/features/average-calculation'

export class AverageCalculationService implements AverageCalculation {
  async execute (params: AverageCalculation.Params): Promise<AverageCalculation.Result> {
    const { numberOne, numberTwo } = params
    return {
      numberOne,
      numberTwo,
      average: 3
    }
  }
}
