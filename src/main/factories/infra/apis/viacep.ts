
import { LoadAddresseViaCepApi } from '@/data/contracts/apis/viacep'
import { ViaCepApi } from '@/infra/apis/viacep'
import { makeHttpClient } from '../http/http-client'

export const makeLoadAddresse = (): LoadAddresseViaCepApi => {
  return new ViaCepApi(makeHttpClient())
}
