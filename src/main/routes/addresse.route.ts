import { adaptExpressRoute as adapt } from '@/main/adapters'

import { Router } from 'express'
import { makeAddresseController } from '../factories/application/controllers'

export default (router: Router): void => {
  router.get('/mepoupe/addresse/:cep', adapt((makeAddresseController())))
}
