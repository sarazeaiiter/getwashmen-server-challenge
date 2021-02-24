import { getPartners } from './openAPI/partners.swagger';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'GetWashmen Challenge',
    description: 'Showing APIs',
    termsOfService: '',

  },
  tags: [
    {
      name: 'Partners'
    }
  ],
  paths: {
    "/partners": {
      "get": getPartners
    },
  },
  components: {
    schemas: {
      Partners: {
        type: "array",
        items: {
          type: 'object',
          properties: {
            organization: {
              type: 'string', format: 'int64'
            },
            offices: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  location: { type: 'string' },
                  address: { type: 'string' },
                  coordinates: { type: 'string' }
                }
              }
            }
          }
        }
      }
    }
  }
}