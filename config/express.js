var express = require('express');

var app = require('express')();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views','./app/views');

console.log('modulo carregado');

module.exports = function() {
    return app;
};

