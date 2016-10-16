var MongoClient = require('mongoose');

var db = MongoClient.connection;
db.on('error', () => {
	console.error("Couldn't establish a database");
});

var simulatorSchema = new mongoose.Schema(
{
	    cellName	: String
	  , cellColor	: String
	  , plasmid		: String				// CHANGE TO ACTUAL TYPE
});


module.exports = {

}