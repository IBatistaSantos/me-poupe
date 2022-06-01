export const env = {
  port: process.env.PORT ?? 3000,
  datadog: {
    apiKey: process.env.DD_API_KEY
  }
}
