import { RequiredNumberValidator, ValidationBuilder } from '@/application/validation'

describe('ValidationBuilder', () => {
  it('should return a RequiredStringValidator', () => {
    const validators = ValidationBuilder
      .of({ value: 3, fieldName: 'any_name' })
      .required()
      .build()

    expect(validators).toEqual([new RequiredNumberValidator(3, 'any_name')])
  })
})
