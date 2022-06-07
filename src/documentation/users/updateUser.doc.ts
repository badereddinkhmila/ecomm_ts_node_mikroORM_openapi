import { _500 } from '../common_utils.doc';
import { _404, _422 } from './users_responses.doc';
import { security } from '../common_utils.doc';

export const userResponseWithRole = {
  id: {
    type: 'string',
    example: '456d6056-4fcb5-4404-7cdc-84d58cf18k12',
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
    enum: ['ROLE_CLIENT','ROLE_PROVIDER'],
    example: 'ROLE_USER',
  },
  firstname: {
      type: 'string',
      example: 'Jhon',
  },
  lastname: {
    type: 'string',
    example: 'Snow',
  },
  address: {
    type: 'string',
    example: 'sfax bir ali ben khalifa',
  },
  created_at: {
    type: 'string',
    example: '2021-03-20T19:40:59.495Z',
  },
  updated_at: {
    type: 'string',
    example: '2021-03-20T21:23:10.879Z',
  },
};

export const updateUser = {
  tags: ['Users'],
  description: 'Update a user',
  operationId: 'updateUser',
  security,
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'User ID',
      required: true,
      type: 'string',
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/updateUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '200': {
      description: 'User retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: userResponseWithRole,
          },
        },
      },
    },
    '404': _404,
    '422': _422,
    '500': _500,
  },
};

export const updateUserBody = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      example: 'John Snow',
    },
    password:{
        type:'string',
        example:'zeczdklee5545z4edzxekcerkc,(àà'
    },
    firstname: {
      type: 'string',
      example: 'John',
    },
    lastname: {
      type: 'string',
      example: 'Snow',
    },
    authority: {
      type: 'string',
      example: 'ROLE_USER',
    },
    address: {
      type: 'string',
      example: 'sfax bir ali ben khalifa',
    },
  },
};
