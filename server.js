var express = require('express'),
	app		= express(),

	MongoClient = require('mongoose'), 
	assert = require('assert');


var dbuser = "main",
	dbpass = "rouse";

var dburl = "mongodb://" + dbuser + ":" + dbpass + "@ds059306.mlab.com:59306/playsmid";

MongoClient.connect(dburl);

app.get('/', (req, res) => {
	res.send("Hello world");
});

app.listen(8080);