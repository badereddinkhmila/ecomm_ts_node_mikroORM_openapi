export const created_201 = {
  description: 'User created successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60564fcb544047cdc3844818',
          },
          username: {
            type: 'string',
            example: 'John Snow',
          },
          email: {
            type: 'string',
            example: 'john.snow@email.com',
          },
          password: {
            type: 'string',
            example: '442893aba778ab321dc151d9b1ad98c64ed56c07f8cbaed',
          },
          authority: {
            type: 'string',
            example: 'ROLE_USER',
          },
          firestname: {
            type: 'string',
            example: 'jhon',
          },
          lastname: {
            type: 'string',
            example: 'snow',
          },
          created_at: {
            type: 'string',
            example: '2021-03-20T19:40:59.495Z',
          },
          updated_at: {
            type: 'string',
            example: '2021-03-20T21:23:10.879Z',
          },
        },
      },
    },
  },
};

export const deleted_200 = {
  description: 'User deleted successfully!',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            example: 'User deleted successfully!',
          },
        },
      },
    },
  },
};

export const _404 = {
  description: 'Resource not found',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Error',
      },
    },
  },
};

export const _422 = {
  description: 'Invalid Data provided',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Error',
      },
      example: {
        message: 'Invalid data provided',
        internal_code: 'invalid_parameters',
      },
    },
  },
};
