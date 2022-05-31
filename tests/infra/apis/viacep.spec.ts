import { ViaCepApi } from '@/infra/apis'
import { HttpGetClient } from '@/infra/http'
import { mock, MockProxy } from 'jest-mock-extended'

describe('ViaCepAPI', () => {
  let httpClient: MockProxy<HttpGetClient>
  let sut: ViaCepApi
  let cep: string

  beforeAll(() => {
    cep = '18150000'
    httpClient = mock()
  })

  beforeEach(() => {
    httpClient.get
      .mockResolvedValueOnce({
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

    sut = new ViaCepApi(httpClient)
  })

  it('should get cep', async () => {
    await sut.loadAdresses({ cep })

    expect(httpClient.get).toHaveBeenCalledWith({
      url: `https://viacep.com.br/ws/${cep}/json`
    })
  })

  it('should return addresses', async () => {
    const addresse = await sut.loadAdresses({ cep })

    expect(addresse).toEqual({
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

  it('should return undefined if HttpGetClient throws', async () => {
    httpClient.get.mockReset().mockRejectedValueOnce(new Error('http_error'))
    const addresse = await sut.loadAdresses({ cep })

    expect(addresse).toBeUndefined()
  })
})
