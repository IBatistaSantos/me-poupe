import { LoadAddresseViaCepApi } from '@/data/contracts/apis/viacep'

import { AddresseService } from '@/data/services'
import { ValidationCepError, LoadAdressesError } from '@/domain/errors'
import { Logger } from '@/domain/models'
import { mock, MockProxy } from 'jest-mock-extended'

describe('AddresseService', () => {
  let sut: AddresseService
  let logger: MockProxy<Logger>
  let viaCepApi: MockProxy<LoadAddresseViaCepApi>
  let cep: string

  beforeAll(() => {
    cep = '18150000'
    logger = mock()
    viaCepApi = mock()
    viaCepApi.loadAdresses.mockResolvedValue({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107'
    })
  })
  beforeEach(() => {
    sut = new AddresseService(logger, viaCepApi)
  })

  it('should call validate with correct params', async () => {
    jest.spyOn(sut, 'execute')
    await sut.execute({ cep })

    expect(sut.execute).toBeCalledWith({ cep })
    expect(sut.execute).toBeCalledTimes(1)
  })

  it('should return ValidationCepError when cep is invalid', async () => {
    const result = await sut.execute({ cep: '123' })
    expect(result).toBeInstanceOf(ValidationCepError)
  })

  it('should call LoadAddresseViaCepApi correct params', async () => {
    await sut.execute({ cep })

    expect(viaCepApi.loadAdresses).toBeCalledWith({ cep })
    expect(viaCepApi.loadAdresses).toBeCalledTimes(1)
  })

  it('should retuns LoadAdressesError when LoadAddresseViaCepApi returns undefined', async () => {
    viaCepApi.loadAdresses.mockResolvedValueOnce(undefined)
    const result = await sut.execute({ cep })
    expect(result).toBeInstanceOf(LoadAdressesError)
  })

  it('should return Addresses when LoadAddresseViaCepApi returns correct params', async () => {
    const result = await sut.execute({ cep })
    expect(result).toEqual({
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

  it('should return message when CEPS does not have bairro', async () => {
    viaCepApi.loadAdresses.mockResolvedValueOnce({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107'

    })
    const result = await sut.execute({ cep })
    expect(result).toEqual({
      cep: '01001-000',
      logradouro: 'Praça da Sé',
      complemento: 'lado ímpar',
      bairro: null,
      localidade: 'São Paulo',
      uf: 'SP',
      ibge: '3550308',
      gia: '1004',
      ddd: '11',
      siafi: '7107',
      message: [{ field: 'bairro', message: 'CEP 01001-000 não possui bairro' }]
    })
  })
})
