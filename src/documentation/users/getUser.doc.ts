import { _500 } from "../common_utils.doc";
import { userResponseWithRole } from "./updateUser.doc";
import { _404 } from "./users_responses.doc";
import { security } from "../common_utils.doc";

export const getUsers = {
  tags: ['Users'],
  description: 'Retrieve all the users',
  operationId: 'getUsers',
  security,
  parameters: [
    {
      name: '_page',
      in: 'path',
      description: 'Page Number',
      required: false,
      default:1,
      type: 'integer',
      nullable:false
    },
    {
      name: '_limit',
      in: 'path',
      description: 'Number of Items Page',
      required: false,
      default:25,
      type: 'integer',
      nullable:false
    },

  ],
  responses: {
    '200': {
      description: 'Users retrieved successfully!',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              type: 'object',
              properties: userResponseWithRole,
            },
          },
        },
      },
    },
    '500': _500,
  },
};

export const getUser = {
  tags: ['Users'],
  description: 'Retrieve one user',
  operationId: 'getUser',
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
    '500': _500,
  },
};