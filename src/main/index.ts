import './config/module-alias'
import './config/trace'

import { app } from './config/app'
import { env } from './config/env'

app.listen(env.port, () => {
  console.log(`Server running on port ${env.port}`)
})
