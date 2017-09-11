const request = require('supertest');
var app = require('../server').app;

it("should return home page",(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});