import { AverageCalculationController } from '@/application/controllers'
import { makeAverageCalculation } from '../../domain/features/average-calculation'

export const makeAverageCalculationController = (): AverageCalculationController => {
  return new AverageCalculationController(makeAverageCalculation())
}
