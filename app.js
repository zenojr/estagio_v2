var express = require('express'); //OLD
var app = express(); //OLD

//var app = require('./config/express.js')();

app.set('view engine', 'ejs'); //OLD

app.get('/public', function(req,res){
	console.log('carregou public');
});

app.use(express.static('public')); //verificar !!!!!

app.get('/principal', function(req,res){
	res.render('principal/login');
});

app.get('/inicial', function(req,res){
	res.render('principal/principal');
});



app.listen(3000,  function(){
	console.log('v8 Running!');
});

//verificar a possibilidade de mudança do arquivo de configuração do express, estava dando problema ao setar a pasta public