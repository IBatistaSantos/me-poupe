export const env = {
  port: process.env.PORT ?? 3000,
  datadog: {
    apiKey: process.env.DATADOG_API_KEY
  }
}
