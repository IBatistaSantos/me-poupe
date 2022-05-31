/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Logger } from '@/domain/models'
import { env } from '@/main/config/env'

import { createLogger, transports, format, Logger as LoggerWinston } from 'winston'

type ConfigurationParams = {
  host: string
  path: string
  ssl: boolean
}

export class WinstonLogger implements Logger {
  private readonly logger: LoggerWinston
  constructor () {
    this.logger = createLogger({
      transports: [process.env.NODE_ENV !== 'production'
        ? new transports.Console()
        : new transports.Http(this.getConfigurationProduction())],
      format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({ timestamp, metadata, level, message }) => {
          return `[${timestamp}] ${level}: ${message} : ${metadata}`
        })
      )
    })
  }

  info (params: Logger.Params): void {
    this.logger.info(params)
  }

  error (params: Logger.Params): void {
    this.logger.error(params)
  }

  private getConfigurationProduction (): ConfigurationParams {
    return {
      host: 'http-intake.logs.datadoghq.com',
      path: `/api/v2/logs?dd-api-key=${env.datadog.apiKey as string}&ddsource=nodejs&service=challenge-me-poupe`,
      ssl: true
    }
  }
}
