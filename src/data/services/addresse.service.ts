import { LoadAdressesError, ValidationCepError } from '@/domain/errors'
import { Addresse } from '@/domain/features'
import { Addresses, Logger } from '@/domain/models'
import { LoadAddresseViaCepApi } from '../contracts/apis/viacep'

export class AddresseService implements Addresse {
  constructor (
    private readonly logger: Logger,
    private readonly loadAdressesViaCepApi: LoadAddresseViaCepApi
  ) {}

  async execute (params: Addresse.Params): Promise<Addresse.Result> {
    const { cep } = params

    this.logger.info({
      message: `[ ${AddresseService.name}] - Request`,
      timestamp: new Date(),
      metadata: JSON.stringify(params)
    })

    if (!this.validateCep(params.cep)) {
      this.logger.error({
        message: `[ ${AddresseService.name}] - Invalid CEP`,
        timestamp: new Date(),
        metadata: JSON.stringify(params)
      })
      return new ValidationCepError(cep)
    }

    this.logger.info({
      message: `Call ViaCep API - ${cep}`,
      timestamp: new Date(),
      metadata: JSON.stringify(params)
    })

    const infoCep = await this.loadAdressesViaCepApi.loadAdresses({ cep })

    this.logger.info({
      message: `[ ${AddresseService.name}] - Request Via Cep API `,
      timestamp: new Date(),
      metadata: JSON.stringify(infoCep)
    })

    if (infoCep === undefined) {
      this.logger.error({
        message: `[ ${AddresseService.name}] - Error call Via CEP API`,
        timestamp: new Date(),
        metadata: JSON.stringify(params)
      })
      return new LoadAdressesError(cep)
    }

    this.logger.info({
      message: `[ ${AddresseService.name}] - Response `,
      timestamp: new Date(),
      metadata: JSON.stringify(infoCep)
    })

    return new Addresses(infoCep)
  }

  private validateCep (cep: string): boolean {
    return /^([\d]{2})\.*([\d]{3})-*([\d]{3})/.test(cep)
  }
}
