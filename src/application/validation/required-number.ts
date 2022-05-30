
import { RequiredFieldError } from '../errors'

export class RequiredNumberValidator {
  constructor (
    private readonly value: number,
    private readonly fieldName: string
  ) {}

  validate (): Error | undefined {
    if (Number.isNaN(this.value) || this.value === undefined || this.value === null) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
