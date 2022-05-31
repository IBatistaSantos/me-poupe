import { ViaCepApi } from '@/infra/apis'
import { AxiosHttpClient } from '@/infra/http'

describe('Via Cep API Integration Tests', () => {
  let sut: ViaCepApi
  let axiosClient: AxiosHttpClient
  let cep: string

  beforeAll(() => {
    cep = '01001000'
    axiosClient = new AxiosHttpClient()
  })
  beforeEach(() => {
    sut = new ViaCepApi(axiosClient)
  })

  it('should return a Address if ceo is valid ', async () => {
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

  it('should return undefined if CEP is invalid ', async () => {
    const addresse = await sut.loadAdresses({ cep: 'cep_invalid' })

    expect(addresse).toBeUndefined()
  })
})
