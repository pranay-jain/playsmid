var express = require('express'),
	app		= express(),

	MongoClient = require('mongoose'),
	assert = require('assert');


app.use(express.static(__dirname + "/public"));
app.set('views', './views');
app.set('view engine', 'hbs');

app.disable('etag');

var dbuser = "main",
	dbpass = "rouse";

var dburl = "mongodb://" + dbuser + ":" + dbpass + "@ds059306.mlab.com:59306/playsmid";

MongoClient.connect(dburl);

var db = MongoClient.connection;

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/play', (req, res) => {
	var cursor = db.collection('data').find({'level': 0});
	var level;
	cursor.toArray(function(err, items) {
		console.log(items[0]);
		//level = items;
		res.render('play', {'level': items[0], 'string': "hello world"});
	});
	//console.log(level);
	
});

app.listen(8080);
