import { WinstonLogger } from '@/infra/logger/winston/logger'

jest.mock('winston', () => {
  const format = {
    combine: jest.fn(),
    timestamp: jest.fn(),
    colorize: jest.fn(),
    printf: jest.fn()
  }
  const transports = {
    Console: jest.fn()
  }
  const logger = {
    info: jest.fn(),
    error: jest.fn()
  }
  return {
    format,
    transports,
    createLogger: jest.fn(() => logger)
  }
})

describe('WinstonLogger', () => {
  let logger: WinstonLogger

  afterEach(() => {
    jest.resetAllMocks()
  })

  beforeEach(() => {
    logger = new WinstonLogger()
  })

  describe('info', () => {
    it('should call info with correct params', () => {
      const fakeMessage = 'fake_message'
      const fakeContext = { fake: 'context' }
      const timestamp = new Date()

      jest.spyOn(logger, 'info')

      logger.info({ message: fakeMessage, metadata: JSON.stringify(fakeContext), timestamp: timestamp })

      expect(logger.info).toHaveBeenCalledWith({
        message: fakeMessage,
        metadata: JSON.stringify(fakeContext),
        timestamp
      })
    })
  })
})
