export interface Logger {
  info: (params: Logger.Params) => void
  error: (params: Logger.Params) => void
}

export namespace Logger {
  export type Params = {
    timestamp: Date
    message: string
    metadata?: string
  }
}
