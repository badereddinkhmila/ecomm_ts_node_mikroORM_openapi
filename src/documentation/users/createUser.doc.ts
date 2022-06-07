import { _500 } from "../common_utils.doc";
import { created_201, _422 } from "./users_responses.doc";
import { security } from "../common_utils.doc";

export const createUser = {
  tags: ['Users'],
  description: 'Add a new user to the system',
  operationId: 'createUser',
  security,
  requestBody: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/createUserBody',
        },
      },
    },
    required: true,
  },
  responses: {
    '201': created_201,
    '422': _422,
    '500': _500,
  },
};

export const createUserBody = {
  type: 'object',
  properties: {
    username: {
      type: 'string',
      example: 'John Snow',
      nullable:false
    },
    email: {
      type: 'string',
      example: 'john.snow@email.com',
      nullable:false
    },
    password: {
      type: 'string',
      description: "unencrypted user's password",
      example: '!1234aWe1Ro3$#',
      nullable:false
    },
    authority: {
      type: 'string',
      enum: ['ROLE_CLIENT','ROLE_PROVIDER'],
      example: 'ROLE_USER',
      nullable:false,
    },
    firstname: {
      type: 'string',
      example: 'John',
      nullable:true,
    },
    lastname: {
      type: 'string',
      example: 'Snow',
      nullable:true,
    },
    address: {
      type: 'string',
      example: 'sfax bir ali ben khalifa',
      nullable:true,
    },
  },
};
