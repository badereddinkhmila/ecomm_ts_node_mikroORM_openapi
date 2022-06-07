"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserBody = exports.createUser = void 0;
const common_utils_doc_1 = require("../common_utils.doc");
const users_responses_doc_1 = require("./users_responses.doc");
const common_utils_doc_2 = require("../common_utils.doc");
exports.createUser = {
    tags: ['Users'],
    description: 'Add a new user to the system',
    operationId: 'createUser',
    security: common_utils_doc_2.security,
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
        '201': users_responses_doc_1.created_201,
        '422': users_responses_doc_1._422,
        '500': common_utils_doc_1._500,
    },
};
exports.createUserBody = {
    type: 'object',
    properties: {
        username: {
            type: 'string',
            example: 'John Snow',
            nullable: false
        },
        email: {
            type: 'string',
            example: 'john.snow@email.com',
            nullable: false
        },
        password: {
            type: 'string',
            description: "unencrypted user's password",
            example: '!1234aWe1Ro3$#',
            nullable: false
        },
        authority: {
            type: 'string',
            enum: ['ROLE_CLIENT', 'ROLE_PROVIDER'],
            example: 'ROLE_USER',
            nullable: false,
        },
        firstname: {
            type: 'string',
            example: 'John',
            nullable: true,
        },
        lastname: {
            type: 'string',
            example: 'Snow',
            nullable: true,
        },
        address: {
            type: 'string',
            example: 'sfax bir ali ben khalifa',
            nullable: true,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlVXNlci5kb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9jdW1lbnRhdGlvbi91c2Vycy9jcmVhdGVVc2VyLmRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMkM7QUFDM0MsK0RBQTBEO0FBQzFELDBEQUErQztBQUVsQyxRQUFBLFVBQVUsR0FBRztJQUN4QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDZixXQUFXLEVBQUUsOEJBQThCO0lBQzNDLFdBQVcsRUFBRSxZQUFZO0lBQ3pCLFFBQVEsRUFBUiwyQkFBUTtJQUNSLFdBQVcsRUFBRTtRQUNYLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFO2dCQUNsQixNQUFNLEVBQUU7b0JBQ04sSUFBSSxFQUFFLHFDQUFxQztpQkFDNUM7YUFDRjtTQUNGO1FBQ0QsUUFBUSxFQUFFLElBQUk7S0FDZjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBRSxpQ0FBVztRQUNsQixLQUFLLEVBQUUsMEJBQUk7UUFDWCxLQUFLLEVBQUUsdUJBQUk7S0FDWjtDQUNGLENBQUM7QUFFVyxRQUFBLGNBQWMsR0FBRztJQUM1QixJQUFJLEVBQUUsUUFBUTtJQUNkLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLFdBQVc7WUFDcEIsUUFBUSxFQUFDLEtBQUs7U0FDZjtRQUNELEtBQUssRUFBRTtZQUNMLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLHFCQUFxQjtZQUM5QixRQUFRLEVBQUMsS0FBSztTQUNmO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLFFBQVE7WUFDZCxXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsUUFBUSxFQUFDLEtBQUs7U0FDZjtRQUNELFNBQVMsRUFBRTtZQUNULElBQUksRUFBRSxRQUFRO1lBQ2QsSUFBSSxFQUFFLENBQUMsYUFBYSxFQUFDLGVBQWUsQ0FBQztZQUNyQyxPQUFPLEVBQUUsV0FBVztZQUNwQixRQUFRLEVBQUMsS0FBSztTQUNmO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsSUFBSSxFQUFFLFFBQVE7WUFDZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFFBQVEsRUFBQyxJQUFJO1NBQ2Q7UUFDRCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsUUFBUTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsUUFBUSxFQUFDLElBQUk7U0FDZDtRQUNELE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxRQUFRO1lBQ2QsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxRQUFRLEVBQUMsSUFBSTtTQUNkO0tBQ0Y7Q0FDRixDQUFDIn0=