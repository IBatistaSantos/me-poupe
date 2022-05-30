import { AverageCalculationService } from '@/data/services'

describe('AverageCalculationService', () => {
  let sut: AverageCalculationService

  beforeEach(() => {
    sut = new AverageCalculationService()
  })
  it('should call AverageCalculationService with the correct parameters', async () => {
    jest.spyOn(sut, 'execute')
    await sut.execute({
      numberOne: 8,
      numberTwo: 9
    })

    expect(sut.execute).toHaveBeenCalledWith({
      numberOne: 8,
      numberTwo: 9
    })
    expect(sut.execute).toHaveBeenCalledTimes(1)
  })

  it('should returns average rounded AverageCalculationService correctly', async () => {
    const result = await sut.execute({
      numberOne: 8,
      numberTwo: 9
    })

    expect(result.average).toBe(9.00)
  })
})
