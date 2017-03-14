
var rotaLogin = require('./app/routes/login')(app); //sempre lembrar de passar como retorno o app

valida = function(app){
	event.preventDefault();
	console.log('chamou!!');
	var userIn = document.querySelector('#user').value;
	var senhaIn = document.querySelector('#senha').value;
	console.log(userIn);
	console.log(senhaIn);
}


for(var i=0; i<lista.length; i++){
	var id = lista[i].id;
	var nome = lista[i].nome;
	var login = lista[i].login;
	var senha = lista[i].senha;
	var email = lista[i].email;

	console.log(nome);
	console.log(email);
}




