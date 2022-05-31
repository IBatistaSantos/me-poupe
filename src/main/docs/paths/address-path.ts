export const addressPath = {
  get: {
    tags: ['Consulta de CEP'],
    summary: 'Consulta de CEP utilizando o webservice viaCEP',
    parameters: [
      {
        name: 'cep',
        in: 'path',
        required: true,
        description: 'CEP a ser consultado',
        schema: {
          type: 'string',
          example: '01001000'
        }
      }

    ],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/address'
            }
          }
        }
      }
    }
  }
}
