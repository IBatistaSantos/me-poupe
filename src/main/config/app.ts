
import express from 'express'
import { setupRoutes } from './routes'
import setupStaticFiles from './static-files'
import setupSwagger from './swagger'
const app = express()

app.use(express.json())
setupRoutes(app)
setupStaticFiles(app)
setupSwagger(app)
export { app }
