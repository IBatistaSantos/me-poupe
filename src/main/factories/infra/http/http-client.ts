
import { HttpGetClient, AxiosHttpClient } from '@/infra/http'

export const makeHttpClient = (): HttpGetClient => {
  return new AxiosHttpClient()
}
