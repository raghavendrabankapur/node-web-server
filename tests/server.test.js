const request = require('supertest');
var app = require('../server').app;
const expect = require("expect");
const helper = require('../helper/helper');

describe('Verifying the header of the pages',()=> {
    it('should contain text home page',(done)=>{
        request(app)
        .get('/')
        .expect(200)
        .expect((res) =>{
            expect(helper.getFromXpath(res.text, '//h1')).toEqual('Home page');
        }).end(done);
    });

    it('should contain text About page',(done)=>{
        request(app)
        .get('/about')
        .expect(200)
        .expect((res) =>{
            expect(helper.getFromXpath(res.text, '//h1')).toEqual('About page');
        }).end(done);
    });

    it('should contain text Projects',(done)=>{
        request(app)
        .get('/projects')
        .expect(200)
        .expect((res) =>{
            expect(helper.getFromXpath(res.text, '//h1')).toEqual('Projects');
        }).end(done);
    });
});

describe('Verifying the links of the page',()=>{
    it('should contain text home page',(done)=>{
        request(app)
        .get('/')
        .expect(200)
        .expect((res) =>{
            var nodes = helper.getAllLinkText(res.text);
            expect(nodes[0]).toEqual('Home');
            expect(nodes[1]).toEqual('About');
            expect(nodes[2]).toEqual('Projects');
        }).end(done);
    });

    it('should contain text About page',(done)=>{
        request(app)
        .get('/about')
        .expect(200)
        .expect((res) =>{
            var nodes = helper.getAllLinkText(res.text);
            expect(nodes[0]).toEqual('Home');
            expect(nodes[1]).toEqual('About');
            expect(nodes[2]).toEqual('Projects');
        }).end(done);
    });

    it('should contain text Projects',(done)=>{
        request(app)
        .get('/projects')
        .expect(200)
        .expect((res) =>{
            var nodes = helper.getAllLinkText(res.text);
            expect(nodes[0]).toEqual('Home');
            expect(nodes[1]).toEqual('GitHub');
            expect(nodes[2]).toEqual('Gitlab');
        }).end(done);
    });
})
