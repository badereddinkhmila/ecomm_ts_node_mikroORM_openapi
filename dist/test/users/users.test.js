"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = __importDefault(require("../../src/application"));
const supertest_1 = __importDefault(require("supertest"));
const uuid_1 = require("uuid");
let firstUserIdTest = ''; // will later hold a value returned by our API
const firstUserBody = {
    email: `marcos.henrique+${(0, uuid_1.v4)()}@toptal.com`,
    password: 'Sup3rSecret!23',
};
let accessToken = '';
let refreshToken = '';
const newFirstName = 'Jose';
const newFirstName2 = 'Paulo';
const newLastName2 = 'Faraco';
const app = new application_1.default().server;
describe('users and auth endpoints', function () {
    let request;
    before(function () {
        request = supertest_1.default.agent(app);
    });
    after(function (done) {
        // shut down the Express.js server, close our MongoDB connection, then
        // tell Mocha we're done:
        app.close(() => {
            //MikroORM.
            //mongoose.connection.close(done);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rlc3QvdXNlcnMvdXNlcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdFQUFnRDtBQUNoRCwwREFBa0M7QUFFbEMsK0JBQTBCO0FBRzFCLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDLDhDQUE4QztBQUN4RSxNQUFNLGFBQWEsR0FBRztJQUNsQixLQUFLLEVBQUUsbUJBQW1CLElBQUEsU0FBRSxHQUFFLGFBQWE7SUFDM0MsUUFBUSxFQUFFLGdCQUFnQjtDQUM3QixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUN0QixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUM7QUFDNUIsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDO0FBQzlCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQztBQUM5QixNQUFNLEdBQUcsR0FBRyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUE7QUFDcEMsUUFBUSxDQUFDLDBCQUEwQixFQUFFO0lBQ2pDLElBQUksT0FBaUMsQ0FBQztJQUN0QyxNQUFNLENBQUM7UUFDSCxPQUFPLEdBQUcsbUJBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDLENBQUM7SUFDSCxLQUFLLENBQUMsVUFBVSxJQUFJO1FBQ2hCLHNFQUFzRTtRQUN0RSx5QkFBeUI7UUFDekIsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWCxXQUFXO1lBQ1gsa0NBQWtDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9