var express = require('express');

var multer  = require('multer');//modulo para upload


var app = require('express')();
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views','./app/views');

console.log('modulo carregado');

module.exports = function() {
    return app;
};


var multer  = require('multer')
var uui = require('uui');
//midleware original - var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, uuid.v4())
  }
})

var upload = multer({ storage: storage })


//var app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
	console.log('files>>', req.file)
	res.redirec('/')
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})

var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})
