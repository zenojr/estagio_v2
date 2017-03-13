module.exports = function(app){
	app.get('/inicial', function(req,res){
		res.render('ged/principal')
	});
}