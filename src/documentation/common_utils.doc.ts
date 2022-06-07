export const _500 = {
  description: 'Internal Server Error',
  content: {
    'application/json': {
      schema: {
        $ref: '#/components/schemas/Error',
      },
      example: {
        message: 'Something went wrong on our server',
        internal_code: 'internal_server_error',
      },
    },
  },
};

export const security = [
  {
    bearerAuth: [] as any[],
  },
];

export const Error = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
    internal_code: {
      type: 'string',
    },
  },
};
