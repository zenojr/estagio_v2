var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/public', function(req,res){
	console.log('carregou public');
});

app.use(express.static('public'));

app.get('/principal', function(req,res){
	res.render('principal/login');
});

app.listen(3000,  function(){
	console.log('v8 Running!');
});

//verificar a possibilidade de mudança do arquivo de configuração do express, estava dando problema ao setar a pasta public