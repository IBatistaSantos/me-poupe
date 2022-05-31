export interface LoadAddresseViaCepApi {
  loadAdresses: (params: LoadAddresseViaCepApi.Params) => Promise<LoadAddresseViaCepApi.Result>
}

export namespace LoadAddresseViaCepApi {
  export type Params = {
    cep: string
  }
  export type Result = undefined | {
    cep: string
    logradouro: string
    complemento: string
    bairro?: string
    localidade: string
    uf: string
    ibge: string
    gia: string
    ddd: string
    siafi: string
  }
}
