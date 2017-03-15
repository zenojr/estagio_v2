module.exports = function(app){
	app.get('/inicial', function(req,res){
		var fs = require('fs');
		fs.readdir('files/CONTABILIDADE', function(err, files){
			var pasta = [files];

			res.render('ged/principal', {lista:files});	
		});
		
	});

	app.get('/teste', function(req,res){
		res.render('ged/teste')
	});
}


/*
module.exports = function(app){
	// Carregando o File System
      var fs = require("fs");
      // Lê o conteúdo do diretório retornando um array de string de arquivos.
      // Obs.: Essa leitura é Não-Bloqueante, por isso retorna via callback.
      fs.readdir("files/", function(err, files){
        console.log(files);
        res.render()
      });
 
}
*/