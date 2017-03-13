var app = require('./config/express')(); //chama arquivo de cfg do express

var rotasGed = require('./app/routes/login')(app); //sempre lembrar de passar como retorno o app



app.listen(3000, function(){
	console.log("V8 Running!!!");	
});
