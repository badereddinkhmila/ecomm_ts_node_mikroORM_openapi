"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserBody = exports.updateUser = exports.userResponseWithRole = void 0;
const common_utils_doc_1 = require("../common_utils.doc");
const users_responses_doc_1 = require("./users_responses.doc");
const common_utils_doc_2 = require("../common_utils.doc");
exports.userResponseWithRole = {
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
        enum: ['ROLE_CLIENT', 'ROLE_PROVIDER'],
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
exports.updateUser = {
    tags: ['Users'],
    description: 'Update a user',
    operationId: 'updateUser',
    security: common_utils_doc_2.security,
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
                        properties: exports.userResponseWithRole,
                    },
                },
            },
        },
        '404': users_responses_doc_1._404,
        '422': users_responses_doc_1._422,
        '500': common_utils_doc_1._500,
    },
};
exports.updateUserBody = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
        },
        password: {
            type: 'string',
            example: 'zeczdklee5545z4edzxekcerkc,(àà'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlVXNlci5kb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9jdW1lbnRhdGlvbi91c2Vycy91cGRhdGVVc2VyLmRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMkM7QUFDM0MsK0RBQW1EO0FBQ25ELDBEQUErQztBQUVsQyxRQUFBLG9CQUFvQixHQUFHO0lBQ2xDLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLHVDQUF1QztLQUNqRDtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLFdBQVc7S0FDckI7SUFDRCxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxxQkFBcUI7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxpREFBaUQ7S0FDM0Q7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsUUFBUTtRQUNkLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBQyxlQUFlLENBQUM7UUFDckMsT0FBTyxFQUFFLFdBQVc7S0FDckI7SUFDRCxTQUFTLEVBQUU7UUFDUCxJQUFJLEVBQUUsUUFBUTtRQUNkLE9BQU8sRUFBRSxNQUFNO0tBQ2xCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFFBQVE7UUFDZCxPQUFPLEVBQUUsTUFBTTtLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLDBCQUEwQjtLQUNwQztJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLDBCQUEwQjtLQUNwQztJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxRQUFRO1FBQ2QsT0FBTyxFQUFFLDBCQUEwQjtLQUNwQztDQUNGLENBQUM7QUFFVyxRQUFBLFVBQVUsR0FBRztJQUN4QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDZixXQUFXLEVBQUUsZUFBZTtJQUM1QixXQUFXLEVBQUUsWUFBWTtJQUN6QixRQUFRLEVBQVIsMkJBQVE7SUFDUixVQUFVLEVBQUU7UUFDVjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsRUFBRSxFQUFFLE1BQU07WUFDVixXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtJQUNELFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFO2dCQUNsQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLHFDQUFxQztpQkFDNUM7YUFDRjtTQUNGO1FBQ0QsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBRTtZQUNMLFdBQVcsRUFBRSw4QkFBOEI7WUFDM0MsT0FBTyxFQUFFO2dCQUNQLGtCQUFrQixFQUFFO29CQUNsQixNQUFNLEVBQUU7d0JBQ04sSUFBSSxFQUFFLFFBQVE7d0JBQ2QsVUFBVSxFQUFFLDRCQUFvQjtxQkFDakM7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsS0FBSyxFQUFFLDBCQUFJO1FBQ1gsS0FBSyxFQUFFLDBCQUFJO1FBQ1gsS0FBSyxFQUFFLHVCQUFJO0tBQ1o7Q0FDRixDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUc7SUFDNUIsSUFBSSxFQUFFLFFBQVE7SUFDZCxVQUFVLEVBQUU7UUFDVixRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxXQUFXO1NBQ3JCO1FBQ0QsUUFBUSxFQUFDO1lBQ0wsSUFBSSxFQUFDLFFBQVE7WUFDYixPQUFPLEVBQUMsZ0NBQWdDO1NBQzNDO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNoQjtRQUNELFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVCxJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxXQUFXO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsMEJBQTBCO1NBQ3BDO0tBQ0Y7Q0FDRixDQUFDIn0=