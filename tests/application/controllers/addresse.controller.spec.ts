import { AddresseController } from '@/application/controllers'
import { Addresse } from '@/domain/features'

import { mock, MockProxy } from 'jest-mock-extended'

describe('AddresseController', () => {
  let addresseService: MockProxy<Addresse>
  let sut: AddresseController
  let cep: string

  beforeAll(() => {
    cep = '18150000'
    addresseService = mock()
    addresseService.execute.mockResolvedValue({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
      message: []
    })
  })

  beforeEach(() => {
    sut = new AddresseController(addresseService)
  })

  it('should call AddresseService with correct parameters', async () => {
    await sut.handle({ cep: '18150000' })

    expect(addresseService.execute).toHaveBeenCalledWith({
      cep
    })
    expect(addresseService.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 200 if average calculation succeeds', async () => {
    const httpResponse = await sut.handle({ cep })
    expect(httpResponse).toEqual({
      statusCode: 200,
      data: {
        cep: '01001-000',
        logradouro: 'Praça da Sé',
        complemento: 'lado ímpar',
        bairro: 'Sé',
        localidade: 'São Paulo',
        uf: 'SP',
        ibge: '3550308',
        gia: '1004',
        ddd: '11',
        siafi: '7107',
        message: []
      }
    })
  })
})
