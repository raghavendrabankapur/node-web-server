const request = require('supertest');
var app = require('../server').app;

it("should return home page",(done)=>{
    request(app)
    .get('/')
    .expect('Home page')
    .end(done);
});