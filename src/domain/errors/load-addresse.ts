export class LoadAdressesError extends Error {
  constructor (cep: string) {
    super(`Error load addresss in ViaCep Api - ${cep}`)
    this.name = 'LoadAdressesError'
  }
}
