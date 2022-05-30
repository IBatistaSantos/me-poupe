import { AverageCalculationService } from '@/data/services'

describe('AverageCalculationService', () => {
  it('should call AverageCalculationService with the correct parameters', async () => {
    const sut = new AverageCalculationService()
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
})
