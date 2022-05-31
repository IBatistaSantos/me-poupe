export class ValidationCepError extends Error {
  constructor (cep: string) {
    super(`CEP ${cep} is invalid`)
  }
}
