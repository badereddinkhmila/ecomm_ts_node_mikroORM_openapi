"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._422 = exports._404 = exports.deleted_200 = exports.created_201 = void 0;
exports.created_201 = {
    description: 'User created successfully!',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    id: {
                        type: 'string',
                        example: '60564fcb544047cdc3844818',
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
                        example: 'ROLE_USER',
                    },
                    firestname: {
                        type: 'string',
                        example: 'jhon',
                    },
                    lastname: {
                        type: 'string',
                        example: 'snow',
                    },
                    created_at: {
                        type: 'string',
                        example: '2021-03-20T19:40:59.495Z',
                    },
                    updated_at: {
                        type: 'string',
                        example: '2021-03-20T21:23:10.879Z',
                    },
                },
            },
        },
    },
};
exports.deleted_200 = {
    description: 'User deleted successfully!',
    content: {
        'application/json': {
            schema: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        example: 'User deleted successfully!',
                    },
                },
            },
        },
    },
};
exports._404 = {
    description: 'Resource not found',
    content: {
        'application/json': {
            schema: {
                $ref: '#/components/schemas/Error',
            },
        },
    },
};
exports._422 = {
    description: 'Invalid Data provided',
    content: {
        'application/json': {
            schema: {
                $ref: '#/components/schemas/Error',
            },
            example: {
                message: 'Invalid data provided',
                internal_code: 'invalid_parameters',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnNfcmVzcG9uc2VzLmRvYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kb2N1bWVudGF0aW9uL3VzZXJzL3VzZXJzX3Jlc3BvbnNlcy5kb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxXQUFXLEdBQUc7SUFDekIsV0FBVyxFQUFFLDRCQUE0QjtJQUN6QyxPQUFPLEVBQUU7UUFDUCxrQkFBa0IsRUFBRTtZQUNsQixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsVUFBVSxFQUFFO29CQUNWLEVBQUUsRUFBRTt3QkFDRixJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsMEJBQTBCO3FCQUNwQztvQkFDRCxRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLFdBQVc7cUJBQ3JCO29CQUNELEtBQUssRUFBRTt3QkFDTCxJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUscUJBQXFCO3FCQUMvQjtvQkFDRCxRQUFRLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLGlEQUFpRDtxQkFDM0Q7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSxXQUFXO3FCQUNyQjtvQkFDRCxVQUFVLEVBQUU7d0JBQ1YsSUFBSSxFQUFFLFFBQVE7d0JBQ2QsT0FBTyxFQUFFLE1BQU07cUJBQ2hCO29CQUNELFFBQVEsRUFBRTt3QkFDUixJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsTUFBTTtxQkFDaEI7b0JBQ0QsVUFBVSxFQUFFO3dCQUNWLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSwwQkFBMEI7cUJBQ3BDO29CQUNELFVBQVUsRUFBRTt3QkFDVixJQUFJLEVBQUUsUUFBUTt3QkFDZCxPQUFPLEVBQUUsMEJBQTBCO3FCQUNwQztpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFdBQVcsR0FBRztJQUN6QixXQUFXLEVBQUUsNEJBQTRCO0lBQ3pDLE9BQU8sRUFBRTtRQUNQLGtCQUFrQixFQUFFO1lBQ2xCLE1BQU0sRUFBRTtnQkFDTixJQUFJLEVBQUUsUUFBUTtnQkFDZCxVQUFVLEVBQUU7b0JBQ1YsT0FBTyxFQUFFO3dCQUNQLElBQUksRUFBRSxRQUFRO3dCQUNkLE9BQU8sRUFBRSw0QkFBNEI7cUJBQ3RDO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHO0lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsT0FBTyxFQUFFO1FBQ1Asa0JBQWtCLEVBQUU7WUFDbEIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSw0QkFBNEI7YUFDbkM7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsSUFBSSxHQUFHO0lBQ2xCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsT0FBTyxFQUFFO1FBQ1Asa0JBQWtCLEVBQUU7WUFDbEIsTUFBTSxFQUFFO2dCQUNOLElBQUksRUFBRSw0QkFBNEI7YUFDbkM7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsYUFBYSxFQUFFLG9CQUFvQjthQUNwQztTQUNGO0tBQ0Y7Q0FDRixDQUFDIn0=