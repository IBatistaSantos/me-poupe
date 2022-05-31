export const averagePath = {
  post: {
    tags: ['Cálculo de Média'],
    summary: 'Rota para cálculo de média utilizando a estratégia de arredondamento Half Round Up',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/averageParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/average'
            }
          }
        }
      }
    }
  }
}
