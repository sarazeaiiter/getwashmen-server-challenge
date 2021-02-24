export const getPartners = {
  tags: ['Partners With or Within Range'],
  summary: "Returns partners from the system",
  operationId: 'getPartners',
  parameters: [{
    in: "query",
    name: "range",
    description: 'Range (KM)',
    schema: {
      type: 'integer',
    },
    required: false,
  }],

  responses: {
    "200": {
      description: "A list of partners.",
      "content": {
        "application/json": {
          schema: {
            $ref: '#/components/schemas/Partners'
          }
        }
      }
    }
  }
} 