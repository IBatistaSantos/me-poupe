
import { AverageCalculationService } from '@/data/services'
import { AverageCalculation } from '@/domain/features'
import { makeLogger } from '../../infra/logger/logger'

export const makeAverageCalculation = (): AverageCalculation => {
  return new AverageCalculationService(makeLogger())
}
