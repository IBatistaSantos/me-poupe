export const averageParams = {
  type: 'object',
  properties: {
    firstNote: {
      type: 'number'
    },
    secondNote: {
      type: 'number'
    }
  },
  required: ['firstNote', 'secondNote']
}
