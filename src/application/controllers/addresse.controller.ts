import { Addresse } from '@/domain/features'
import { Addresses } from '@/domain/models'

import { badRequest, HttpResponse, ok } from '../helpers'
import { Controller } from './controller'

type HttpRequest = {
  cep: string

}

type Model = Error | Addresses

export class AddresseController extends Controller {
  constructor (private readonly addresse: Addresse) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    const data = await this.addresse.execute({
      cep: httpRequest.cep
    })

    return data instanceof Error ? badRequest(data) : ok(data)
  }
}
