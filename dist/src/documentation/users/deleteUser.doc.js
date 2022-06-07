"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const common_utils_doc_1 = require("../common_utils.doc");
const users_responses_doc_1 = require("./users_responses.doc");
const common_utils_doc_2 = require("../common_utils.doc");
exports.deleteUser = {
    tags: ['Users'],
    description: 'Delete a user',
    operationId: 'deleteUser',
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
        '200': users_responses_doc_1.deleted_200,
        '500': common_utils_doc_1._500,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlVXNlci5kb2MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZG9jdW1lbnRhdGlvbi91c2Vycy9kZWxldGVVc2VyLmRvYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwREFBMkM7QUFDM0MsK0RBQW9EO0FBQ3BELDBEQUErQztBQUVsQyxRQUFBLFVBQVUsR0FBRztJQUN4QixJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDZixXQUFXLEVBQUUsZUFBZTtJQUM1QixXQUFXLEVBQUUsWUFBWTtJQUN6QixRQUFRLEVBQVIsMkJBQVE7SUFDUixVQUFVLEVBQUU7UUFDVjtZQUNFLElBQUksRUFBRSxJQUFJO1lBQ1YsRUFBRSxFQUFFLE1BQU07WUFDVixXQUFXLEVBQUUsU0FBUztZQUN0QixRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtJQUNELFNBQVMsRUFBRTtRQUNULEtBQUssRUFBRSxpQ0FBVztRQUNsQixLQUFLLEVBQUUsdUJBQUk7S0FDWjtDQUNGLENBQUMifQ==