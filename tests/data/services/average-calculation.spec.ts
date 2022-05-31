import { AverageCalculationService } from '@/data/services'
import { Logger } from '@/domain/models'
import { mock, MockProxy } from 'jest-mock-extended'

describe('AverageCalculationService', () => {
  let sut: AverageCalculationService
  let logger: MockProxy<Logger>

  beforeEach(() => {
    logger = mock()
    sut = new AverageCalculationService(logger)
  })

  it('should call AverageCalculationService with the correct parameters', async () => {
    jest.spyOn(sut, 'execute')
    sut.execute({ firstNote: 8, secondNote: 9 })

    expect(sut.execute).toHaveBeenCalledWith({
      firstNote: 8,
      secondNote: 9
    })
    expect(sut.execute).toHaveBeenCalledTimes(1)
  })

  it('should returns average rounded AverageCalculationService correctly', async () => {
    const result = sut.execute({
      firstNote: 8,
      secondNote: 9
    })

    expect(result).toEqual({
      firstNote: 8,
      secondNote: 9,
      average: '9.00'
    })
  })
})
