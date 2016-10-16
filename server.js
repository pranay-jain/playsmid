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
	res.redirect("/play/0");
});

app.get('/play/:lvl', (req, res) => {
	var level = parseInt(req.params.lvl);
	//console.log(level);
	var cursor = db.collection('data').find({'level': level});
	cursor.toArray(function(err, items) {
		//console.log(items[0]);
		res.render('play', {'level_string': JSON.stringify(items[0]), 'level': items[0]});
	});
});

app.listen(process.env.PORT || 8080);
