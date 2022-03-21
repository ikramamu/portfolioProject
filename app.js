const express = require('express');
const data = require("./data.json").project;

const app = express();

app.use('/static', express.static('public'));

app.use('/images', express.static('images'));

app.set('view engine', 'pug');
//app.set('views', './views');

// An "index" route (/) to render the "Home" page with the locals set to data.projects
// - An "about" route (/about) to render the "About" page

app.get('/', (req, res)=>{
    console.log(`${data[0].image_url}`)
    res.render('index', {data});
});

app.get('/project/:id', (req, res)=>{
    const id = req.params.id;

    let targetproject = data[id];
    res.render('project', {targetproject});
});

app.use((req, res, next) => {
    res.status(404).send({
    status: 404,
    error: "Not found"
    })
   });

app.get('/about', (req, res)=>{
    res.render('about');
});

app.listen(3000,()=>{
    console.log('the application is running on localhost:3000')
});
