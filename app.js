var express = require('express');
var app = express();
var path = require('path');
var port =  process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use( express.static( path.join( __dirname, 'static' ) ) );

app.get('/', function(req,res){
	res.render('index');
});

app.listen(port, function(){
	console.log("Server listening in on port " + port);
});