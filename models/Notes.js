var mongoose = require('mongoose');

//set up connection to mongodb on localhost and use 'photo_app' as db
mongoose.connect('mongodb://localhost/evento', function(err){
	if (err) throw err;
}); 

var schema = new mongoose.Schema({
	title: String,
	date: String,
	location: String,
	price: String,
	source: String,
	link: String,
	description: String,
	tags: [String, String]
});
module.exports = mongoose.model('Notes', schema);


