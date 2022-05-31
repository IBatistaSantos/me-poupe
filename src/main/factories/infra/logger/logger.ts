
import { Logger } from '@/domain/models'
import { WinstonLogger } from '@/infra/logger/winston/logger'

export const makeLogger = (): Logger => {
  return new WinstonLogger()
}
