import { AverageCalculationController } from '@/application/controllers'
import { RequiredNumberValidator } from '@/application/validation/required-number'
import { AverageCalculation } from '@/domain/features'

import { mock, MockProxy } from 'jest-mock-extended'

describe('AverageCalculationController', () => {
  let averageCalculationService: MockProxy<AverageCalculation>
  let sut: AverageCalculationController
  let firstNote: number
  let secondNote: number

  beforeAll(() => {
    firstNote = 8
    secondNote = 9
    averageCalculationService = mock()
    averageCalculationService.execute.mockReturnValue({
      firstNote,
      secondNote,
      average: 9.00
    })
  })

  beforeEach(() => {
    sut = new AverageCalculationController(averageCalculationService)
  })
  it('should build Validators correctly', async () => {
    const validators = sut.buildValidators({
      firstNote: 8,
      secondNote: 9
    })

    expect(validators).toEqual([
      new RequiredNumberValidator(firstNote, 'firstNote'),
      new RequiredNumberValidator(secondNote, 'secondNote')
    ])
  })

  it('should call AverageCalculationService with correct parameters', async () => {
    await sut.handle({ firstNote, secondNote })

    expect(averageCalculationService.execute).toHaveBeenCalledWith({
      firstNote,
      secondNote
    })
    expect(averageCalculationService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 200 if average calculation succeeds', async () => {
    const httpResponse = await sut.handle({
      firstNote,
      secondNote
    })
    expect(httpResponse).toEqual({
      statusCode: 200,
      data: {
        firstNote,
        secondNote,
        average: 9.00
      }
    })
  })
})
