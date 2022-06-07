"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = exports.security = exports._500 = void 0;
exports._500 = {
    description: 'Internal Server Error',
    content: {
        'application/json': {
            schema: {
                $ref: '#/components/schemas/Error',
            },
            example: {
                message: 'Something went wrong on our server',
                internal_code: 'internal_server_error',
            },
        },
    },
};
exports.security = [
    {
        bearerAuth: [],
    },
];
exports.Error = {
    type: 'object',
    properties: {
        message: {
            type: 'string',
        },
        internal_code: {
            type: 'string',
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uX3V0aWxzLmRvYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N1bWVudGF0aW9uL2NvbW1vbl91dGlscy5kb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxJQUFJLEdBQUc7SUFDbEIsV0FBVyxFQUFFLHVCQUF1QjtJQUNwQyxPQUFPLEVBQUU7UUFDUCxrQkFBa0IsRUFBRTtZQUNsQixNQUFNLEVBQUU7Z0JBQ04sSUFBSSxFQUFFLDRCQUE0QjthQUNuQztZQUNELE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUUsb0NBQW9DO2dCQUM3QyxhQUFhLEVBQUUsdUJBQXVCO2FBQ3ZDO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLFFBQVEsR0FBRztJQUN0QjtRQUNFLFVBQVUsRUFBRSxFQUFXO0tBQ3hCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsS0FBSyxHQUFHO0lBQ25CLElBQUksRUFBRSxRQUFRO0lBQ2QsVUFBVSxFQUFFO1FBQ1YsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFFBQVE7U0FDZjtRQUNELGFBQWEsRUFBRTtZQUNiLElBQUksRUFBRSxRQUFRO1NBQ2Y7S0FDRjtDQUNGLENBQUMifQ==