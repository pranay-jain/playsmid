var express = require('express'),
	app		= express(),

	MongoClient = require('mongoose'), 
	assert = require('assert');


app.use(express.static(__dirname + "/public"));
app.set('views', './views');
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'hbs');

app.disable('etag');

app.get('/', (req, res) => {
	res.render('index');
});




var dbuser = "main",
	dbpass = "rouse";

var dburl = "mongodb://" + dbuser + ":" + dbpass + "@ds059306.mlab.com:59306/playsmid";

MongoClient.connect(dburl);



app.listen(8080);