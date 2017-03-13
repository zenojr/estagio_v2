var express = require('express');
var app = express();

app.get('/ged', function(req,res){
	res.send("<html><body><h1>Listagem de arquivos</h1></body></html>");
});


app.listen(3000, function(){
	console.log("V8 Running!!!");	
});

