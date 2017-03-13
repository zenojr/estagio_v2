
module.exports = function(app) {
    app.get("/ged",function(req, res) {
        res.render('ged/login');
    });

    
}
