
module.exports = function(app) {
    app.get("/ged",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
        	host : 'localhost',
        	user : 'root',
        	password : 'pass@word1',
        	database : 'GED'
        });
        connection.query('select * from usuario', function(err,results){
        	res.render('ged/login', {lista:results});
        });
    });
}



