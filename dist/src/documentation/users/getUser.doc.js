"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getUsers = void 0;
const common_utils_doc_1 = require("../common_utils.doc");
const updateUser_doc_1 = require("./updateUser.doc");
const users_responses_doc_1 = require("./users_responses.doc");
const common_utils_doc_2 = require("../common_utils.doc");
exports.getUsers = {
    tags: ['Users'],
    description: 'Retrieve all the users',
    operationId: 'getUsers',
    security: common_utils_doc_2.security,
    parameters: [
        {
            name: '_page',
            in: 'path',
            description: 'Page Number',
            required: false,
            default: 1,
            type: 'integer',
            nullable: false
        },
        {
            name: '_limit',
            in: 'path',
            description: 'Number of Items Page',
            required: false,
            default: 25,
            type: 'integer',
            nullable: false
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
                            properties: updateUser_doc_1.userResponseWithRole,
                        },
                    },
                },
            },
        },
        '500': common_utils_doc_1._500,
    },
};
exports.getUser = {
    tags: ['Users'],
    description: 'Retrieve one user',
    operationId: 'getUser',
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
    responses: {
        '200': {
            description: 'User retrieved successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: updateUser_doc_1.userResponseWithRole,
                    },
                },
            },
        },
        '404': users_responses_doc_1._404,
        '500': common_utils_doc_1._500,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VXNlci5kb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9jdW1lbnRhdGlvbi91c2Vycy9nZXRVc2VyLmRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMkM7QUFDM0MscURBQXdEO0FBQ3hELCtEQUE2QztBQUM3QywwREFBK0M7QUFFbEMsUUFBQSxRQUFRLEdBQUc7SUFDdEIsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDO0lBQ2YsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxXQUFXLEVBQUUsVUFBVTtJQUN2QixRQUFRLEVBQVIsMkJBQVE7SUFDUixVQUFVLEVBQUU7UUFDVjtZQUNFLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRSxFQUFFLE1BQU07WUFDVixXQUFXLEVBQUUsYUFBYTtZQUMxQixRQUFRLEVBQUUsS0FBSztZQUNmLE9BQU8sRUFBQyxDQUFDO1lBQ1QsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUMsS0FBSztTQUNmO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsUUFBUTtZQUNkLEVBQUUsRUFBRSxNQUFNO1lBQ1YsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxRQUFRLEVBQUUsS0FBSztZQUNmLE9BQU8sRUFBQyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVM7WUFDZixRQUFRLEVBQUMsS0FBSztTQUNmO0tBRUY7SUFDRCxTQUFTLEVBQUU7UUFDVCxLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUUsK0JBQStCO1lBQzVDLE9BQU8sRUFBRTtnQkFDUCxrQkFBa0IsRUFBRTtvQkFDbEIsTUFBTSxFQUFFO3dCQUNOLElBQUksRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRTs0QkFDTCxJQUFJLEVBQUUsUUFBUTs0QkFDZCxVQUFVLEVBQUUscUNBQW9CO3lCQUNqQztxQkFDRjtpQkFDRjthQUNGO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsdUJBQUk7S0FDWjtDQUNGLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRztJQUNyQixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDZixXQUFXLEVBQUUsbUJBQW1CO0lBQ2hDLFdBQVcsRUFBRSxTQUFTO0lBQ3RCLFFBQVEsRUFBUiwyQkFBUTtJQUNSLFVBQVUsRUFBRTtRQUNWO1lBQ0UsSUFBSSxFQUFFLElBQUk7WUFDVixFQUFFLEVBQUUsTUFBTTtZQUNWLFdBQVcsRUFBRSxTQUFTO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLFFBQVE7U0FDZjtLQUNGO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFLDhCQUE4QjtZQUMzQyxPQUFPLEVBQUU7Z0JBQ1Asa0JBQWtCLEVBQUU7b0JBQ2xCLE1BQU0sRUFBRTt3QkFDTixJQUFJLEVBQUUsUUFBUTt3QkFDZCxVQUFVLEVBQUUscUNBQW9CO3FCQUNqQztpQkFDRjthQUNGO1NBQ0Y7UUFDRCxLQUFLLEVBQUUsMEJBQUk7UUFDWCxLQUFLLEVBQUUsdUJBQUk7S0FDWjtDQUNGLENBQUMifQ==