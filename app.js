var app = require('./config/express')(); //chama arquivo de cfg do express

var rotaLogin = require('./app/routes/login')(app); //sempre lembrar de passar como retorno o app
var rotaInicial = require('./app/routes/principal')(app); 


app.listen(3000, function(){
	console.log("V8 Running!!");	
});
