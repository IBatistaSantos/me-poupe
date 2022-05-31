import { LoadAddresseViaCepApi } from '@/data/contracts/apis/viacep'
import { HttpGetClient } from '../http'

export class ViaCepApi implements LoadAddresseViaCepApi {
  private readonly baseUrl = 'https://viacep.com.br/ws'
  constructor (
    private readonly httpClient: HttpGetClient
  ) {}

  async loadAdresses (params: LoadAddresseViaCepApi.Params): Promise<LoadAddresseViaCepApi.Result> {
    try {
      const { cep } = params
      const url = `${this.baseUrl}/${cep}/json`
      const result = await this.httpClient.get({ url })
      return result
    } catch (error) {
      return undefined
    }
  }
}
