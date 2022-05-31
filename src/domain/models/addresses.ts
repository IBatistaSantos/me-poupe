
type AddressesData = {
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

export class Addresses {
  cep: string
  logradouro: string
  complemento: string
  bairro: string | null
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
  message: [{ field: string, message: string }] | []

  constructor (params: AddressesData) {
    this.cep = params.cep
    this.logradouro = params.logradouro
    this.complemento = params.complemento
    this.bairro = params.bairro ?? null
    this.localidade = params.localidade
    this.uf = params.uf
    this.ddd = params.ddd
    this.ibge = params.ibge
    this.gia = params.gia
    this.siafi = params.siafi
    this.message = ((params?.bairro) != null)
      ? []
      : [{ field: 'bairro', message: `CEP ${this.cep} não possui bairro` }]
  }
}
