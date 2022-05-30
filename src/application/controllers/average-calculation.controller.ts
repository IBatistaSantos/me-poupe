import { AverageCalculation } from '@/domain/features'
import { AverageResult } from '@/domain/models'

import { badRequest, HttpResponse, ok } from '../helpers'
import { ValidationBuilder, Validator } from '../validation'
import { Controller } from './controller'

type HttpRequest = {
  firstNote: number
  secondNote: number
}

type Model = Error | AverageResult

export class AverageCalculationController extends Controller {
  constructor (private readonly averageCalculation: AverageCalculation) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    const data = this.averageCalculation.execute({
      firstNote: httpRequest.firstNote,
      secondNote: httpRequest.secondNote
    })

    return data instanceof Error ? badRequest(data) : ok(data)
  }

  override buildValidators (httpRequest: HttpRequest): Validator[] {
    return [
      ...ValidationBuilder
        .of({ value: httpRequest.firstNote, fieldName: 'firstNote' })
        .required()
        .build(),

      ...ValidationBuilder
        .of({ value: httpRequest.secondNote, fieldName: 'secondNote' })
        .required()
        .build()
    ]
  }
}
