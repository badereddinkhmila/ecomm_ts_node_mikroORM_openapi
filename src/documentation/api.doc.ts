import { createUser, createUserBody } from './users/createUser.doc';
import { updateUser, updateUserBody } from './users/updateUser.doc';
import { getUsers, getUser } from './users/getUser.doc';
import { deleteUser } from './users/deleteUser.doc';
import { Error } from './common_utils.doc';

export const apiDocumentation = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'My E-commerce REST API - Documentation',
    description: 'REST API for a react js frontend',
    termsOfService: 'https://mysite.com/terms',
    contact: {
      name: 'Badreddine khmila',
      email: 'khmila.badreddine@gmail.com',
      url: 'https://protfolio.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:5000/',
      description: 'Local Server',
    },
    {
      url: 'https://api.mysite.com',
      description: 'Production Server',
    },
  ],
  tags: [
    {
      name: 'Products',
    },
    {
      name: 'Orders',
    },
    {
      name: 'Categories',
    },
    {
      name: 'Users',
    },
  ],

  paths: {
    '/users': {
      post: createUser,
      get: getUsers,
    },
    '/users/{id}': {
      get: getUser,
      delete: deleteUser,
      patch: updateUser,
      put: updateUser,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
    },
    schemas: {
      createUserBody,
      updateUserBody,
      Error,
    },
  },
};
