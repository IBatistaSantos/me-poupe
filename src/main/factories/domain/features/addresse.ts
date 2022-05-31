
import { AddresseService } from '@/data/services'
import { Addresse } from '@/domain/features'
import { makeLoadAddresse } from '../../infra/apis/viacep'
import { makeLogger } from '../../infra/logger/logger'

export const makeAddresses = (): Addresse => {
  return new AddresseService(makeLogger(), makeLoadAddresse())
}
