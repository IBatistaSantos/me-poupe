import { RequiredFieldError } from '@/application/errors'
import { RequiredNumberValidator } from '@/application/validation'

describe('RequiredStringValidator', () => {
  it('should return RequiredFieldError if value is null', () => {
    const sut = new RequiredNumberValidator(null as any, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return RequiredFieldError if value is undefined', () => {
    const sut = new RequiredNumberValidator(undefined as any, 'any_field')

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if value is not empty', () => {
    const sut = new RequiredNumberValidator(3, 'any_field')

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
