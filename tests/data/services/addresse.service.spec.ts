import { Logger } from '@/domain/models'
import { mock, MockProxy } from 'jest-mock-extended'

class AddresseService implements Addresse {
  constructor (

    private readonly logger: Logger
  ) {}

  async execute (params: Addresse.Params): Promise<void> {
    this.logger.info({
      message: `[ ${AddresseService.name}] - Request`,
      timestamp: new Date(),
      metadata: JSON.stringify(params)
    })
  }
}

export interface Addresse {
  execute: (params: Addresse.Params) => Promise<void>
}

namespace Addresse {
  export type Params = {
    cep: string
  }
}

describe('AddresseService', () => {
  let sut: AddresseService
  let logger: MockProxy<Logger>
  let cep: string

  beforeAll(() => {
    cep = '18150000'
  })
  beforeEach(() => {
    logger = mock()
    sut = new AddresseService(logger)
  })
  it('should call execute the AddresseService with correct params', async () => {
    jest.spyOn(sut, 'execute')
    await sut.execute({ cep })

    expect(sut.execute).toBeCalledWith({ cep })
    expect(sut.execute).toBeCalledTimes(1)
  })
})
