import { addressPath } from './paths/address-path'
import { averagePath } from './paths/average-path'

export default {
  '/average': averagePath,
  '/addresse/{cep}': addressPath

}
