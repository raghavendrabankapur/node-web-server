const request = require('supertest');
var app = require('../server').app;
const expect = require("expect");

it("should return home page",(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .end(done);
});

it('should contain text home page',(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect((res) =>{
        expect(res.text).toContain('Home page');
    }).end(done);
});