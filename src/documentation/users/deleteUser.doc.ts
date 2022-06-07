import { _500 } from "../common_utils.doc";
import { deleted_200 } from "./users_responses.doc";
import { security } from "../common_utils.doc";

export const deleteUser = {
  tags: ['Users'],
  description: 'Delete a user',
  operationId: 'deleteUser',
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
    '200': deleted_200,
    '500': _500,
  },
};