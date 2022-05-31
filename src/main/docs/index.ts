import paths from './paths'
import schemas from '@/main/docs/schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Challenge Me Poupe',
    description: 'API para cálculo de média utilizando a estratégia de arredondamento Half Round Up e consulta de CEP utilizando o webservice viaCEP',
    version: '1.0.0'
  },
  servers: [
    {
      url: '/api/mepoupe'
    }
  ],
  tags: [
    {
      name: 'Cálculo de Média'
    },
    {
      name: 'Consulta de CEP'
    }
  ],
  paths,
  schemas
}
