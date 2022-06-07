"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiDocumentation = void 0;
const createUser_doc_1 = require("./users/createUser.doc");
const updateUser_doc_1 = require("./users/updateUser.doc");
const getUser_doc_1 = require("./users/getUser.doc");
const deleteUser_doc_1 = require("./users/deleteUser.doc");
const common_utils_doc_1 = require("./common_utils.doc");
exports.apiDocumentation = {
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
            post: createUser_doc_1.createUser,
            get: getUser_doc_1.getUsers,
        },
        '/users/{id}': {
            get: getUser_doc_1.getUser,
            delete: deleteUser_doc_1.deleteUser,
            patch: updateUser_doc_1.updateUser,
            put: updateUser_doc_1.updateUser,
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
            createUserBody: createUser_doc_1.createUserBody,
            updateUserBody: updateUser_doc_1.updateUserBody,
            Error: common_utils_doc_1.Error,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmRvYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb2N1bWVudGF0aW9uL2FwaS5kb2MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkRBQW9FO0FBQ3BFLDJEQUFvRTtBQUNwRSxxREFBd0Q7QUFDeEQsMkRBQW9EO0FBQ3BELHlEQUEyQztBQUU5QixRQUFBLGdCQUFnQixHQUFHO0lBQzlCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLEtBQUssRUFBRSx3Q0FBd0M7UUFDL0MsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxjQUFjLEVBQUUsMEJBQTBCO1FBQzFDLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRSxtQkFBbUI7WUFDekIsS0FBSyxFQUFFLDZCQUE2QjtZQUNwQyxHQUFHLEVBQUUsdUJBQXVCO1NBQzdCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFLFlBQVk7WUFDbEIsR0FBRyxFQUFFLGtEQUFrRDtTQUN4RDtLQUNGO0lBQ0QsT0FBTyxFQUFFO1FBQ1A7WUFDRSxHQUFHLEVBQUUsd0JBQXdCO1lBQzdCLFdBQVcsRUFBRSxjQUFjO1NBQzVCO1FBQ0Q7WUFDRSxHQUFHLEVBQUUsd0JBQXdCO1lBQzdCLFdBQVcsRUFBRSxtQkFBbUI7U0FDakM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKO1lBQ0UsSUFBSSxFQUFFLFVBQVU7U0FDakI7UUFDRDtZQUNFLElBQUksRUFBRSxRQUFRO1NBQ2Y7UUFDRDtZQUNFLElBQUksRUFBRSxZQUFZO1NBQ25CO1FBQ0Q7WUFDRSxJQUFJLEVBQUUsT0FBTztTQUNkO0tBQ0Y7SUFFRCxLQUFLLEVBQUU7UUFDTCxRQUFRLEVBQUU7WUFDUixJQUFJLEVBQUUsMkJBQVU7WUFDaEIsR0FBRyxFQUFFLHNCQUFRO1NBQ2Q7UUFDRCxhQUFhLEVBQUU7WUFDYixHQUFHLEVBQUUscUJBQU87WUFDWixNQUFNLEVBQUUsMkJBQVU7WUFDbEIsS0FBSyxFQUFFLDJCQUFVO1lBQ2pCLEdBQUcsRUFBRSwyQkFBVTtTQUNoQjtLQUNGO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsZUFBZSxFQUFFO1lBQ2YsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxNQUFNO2dCQUNaLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsRUFBRSxFQUFFLFFBQVE7YUFDYjtTQUNGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsY0FBYyxFQUFkLCtCQUFjO1lBQ2QsY0FBYyxFQUFkLCtCQUFjO1lBQ2QsS0FBSyxFQUFMLHdCQUFLO1NBQ047S0FDRjtDQUNGLENBQUMifQ==