import { Addresses } from '../models/addresses'

export interface Addresse {
  execute: (params: Addresse.Params) => Promise<Addresse.Result>
}

export namespace Addresse {
  export type Params = {
    cep: string
  }

  export type Result = Error | Addresses
}
