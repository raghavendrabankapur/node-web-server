const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

// hbs.registerPartials(__dirname + '/views/partials');
beforeEach(done => {
    hbs.registerPartials(__dirname + '/views/partials', done);
   });
/* Above line need to be a absolute directory. This can be achieved by using the
__dirname inbuild property of node. */

app.set('view engine','hbs');


/* Above line need to be a absolute directory. This can be achieved by using the
__dirname inbuild property of node. */
// app.use((req, res, next)=>{
//     var now = new Date().toString();
//     var log = `${now}: ${req.method} ${req.url}`
//     console.log(log);
//     // fs.appendFile('server.log', log + '\n', (err)=>{
//     //     if(err){
//     //         console.log('An error occured');
//     //     }
//     // });
//     next();
// });


/* Above code will register a middleware. This will be not be completed untill the next method is called. So
A DB connectivity call can be made here. Till then none of the request will be entertained */

//Once we comment the maintanance middleware, this will remove the middleware
// app.use((req, res, next)=>{
//     res.render('maintanance.hbs')
//     next();
// });
/*
 Above code is used ot show only the maintanance page. Note here next is not been called. So,
 at this time the page will displaye the maintanance.hbs file
 */

// Below code will remove the middleware. This can contain static content like html, images, css, scripts etc
app.use(express.static(__dirname + '/public'));
// By putting the above line here, the order express executes the statments will change. Before in maintainace time,
// help.html in public folder was accessible. Now moving it down it will not be accessible

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

app.get('/', (req, res)=>{
    res.render('home.hbs',{
        pageTitle : 'Home page',
        welcomeMessage : 'Welcome to the some website'
    });
});

// home.hbs
// h1 as title, footer, welcome property

app.get('/about',(req, res)=>{
    res.render('about.hbs', {
        pageTitle:'About page',
    });
});

app.get('/bad',(req, res)=>{
    res.send({
        errorMessage : 'Unable to process the request'
    });
});

app.get('/projects',(req, res)=>{
    res.render('projects.hbs', {
        pageTitle:'Projects page',
        githubproject:'https://github.com/raghavendrabankapur',
        gitlabprojects:'https://gitlab.com/ba.raghu'
    });
});

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
});

module.exports.app = app;