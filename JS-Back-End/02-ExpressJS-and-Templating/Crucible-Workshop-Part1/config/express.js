const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


module.exports = (app) => {
    //TODO: Setup the body parser
    app.use(bodyParser.urlencoded({extended: 'false'}));
    //TODO: Setup the static file
    app.use(express.static(path.resolve(__basedir, 'static')));
    //TODO: Setup the view engine
    app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false }));
    app.set('views', path.resolve(__basedir, 'views'));
};