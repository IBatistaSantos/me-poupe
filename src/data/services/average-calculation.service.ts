import { AverageCalculation } from '@/domain/features/average-calculation'

export class AverageCalculationService implements AverageCalculation {
  execute (params: AverageCalculation.Params): AverageCalculation.Result {
    const { firstNote, secondNote } = params

    const average = Number(Math.round((firstNote + secondNote) / 2).toFixed(2))

    return {
      firstNote,
      secondNote,
      average
    }
  }
}
