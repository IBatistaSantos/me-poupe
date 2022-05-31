import { AddresseController } from '@/application/controllers'
import { makeAddresses } from '../../domain/features/addresse'

export const makeAddresseController = (): AddresseController => {
  return new AddresseController(makeAddresses())
}
