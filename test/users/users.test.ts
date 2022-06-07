import Application from '../../src/application';
import supertest from 'supertest';
import { expect } from 'chai';
import { v4 } from 'uuid';
import { MikroORM } from '@mikro-orm/core';

let firstUserIdTest = ''; // will later hold a value returned by our API
const firstUserBody = {
    email: `marcos.henrique+${v4()}@toptal.com`,
    password: 'Sup3rSecret!23',
};

let accessToken = '';
let refreshToken = '';
const newFirstName = 'Jose';
const newFirstName2 = 'Paulo';
const newLastName2 = 'Faraco';
const app = new Application().server
describe('users and auth endpoints', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
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