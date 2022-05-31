import { adaptExpressRoute as adapt } from '@/main/adapters'

import { Router } from 'express'
import { makeAverageCalculationController } from '../factories/application/controllers/average-calculation'

export default (router: Router): void => {
  router.post('/mepoupe/average', adapt((makeAverageCalculationController())))
}
