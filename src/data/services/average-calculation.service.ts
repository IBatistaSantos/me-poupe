import { AverageCalculation } from '@/domain/features/average-calculation'
import { Logger } from '@/domain/models'

export class AverageCalculationService implements AverageCalculation {
  constructor (
    private readonly logger: Logger
  ) {

  }

  execute (params: AverageCalculation.Params): AverageCalculation.Result {
    const { firstNote, secondNote } = params

    this.logger.info({
      message: `[${AverageCalculationService.name}] -  Request `,
      metadata: JSON.stringify(params),
      timestamp: new Date()
    })

    const average = Number(Math.round((firstNote + secondNote) / 2)).toFixed(2)

    const data = {
      firstNote,
      secondNote,
      average
    }

    this.logger.info({
      message: `[${AverageCalculationService.name}] -  Response `,
      metadata: JSON.stringify(data),
      timestamp: new Date()
    })
    return data
  }
}
