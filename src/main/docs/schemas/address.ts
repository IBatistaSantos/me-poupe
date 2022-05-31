export const address = {
  type: 'object',
  properties: {
    cep: {
      type: 'string'
    },
    logradouro: {
      type: 'string'
    },
    complemento: {
      type: 'string'
    },
    bairro: {
      type: 'string'
    },
    localidade: {
      type: 'string'
    },
    uf: {
      type: 'string'
    },
    ddd: {
      type: 'string'
    },
    ibge: {
      type: 'string'
    },
    gia: {
      type: 'string'
    },
    siafi: {
      type: 'string'
    },
    message: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          field: {
            type: 'string'
          },
          message: {
            type: 'string'
          }
        }
      }
    }
  }
}
