var express = require('express');
var app = express();

app.use(express.bodyParser());

app.post("/quote", function(req, res){
	console.log("in post");

	console.log("req.body.author = " + req.body.author);


	if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text'))
	{
		res.statusCode = 400;
		return res.send('Error 400: Post syntax incorrect.');
	}

	var newQuote = {
		author: req.body.author, text: req.body.text
	};
	
	console.log("New quote = " + newQuote);
	quotes.push(newQuote);
	res.json(true)
	res.send("Got the quote");

});

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('i am a beautiful butterlfy');
});


var quotes = [
	{ author : 'Audrey Hepburn', text : "Nothing is impossible, the word itself says 'I'm possible'!"},
	{ author: "Walt Disney", text : "You may not realize it happens, but a kick in the teeth may be the best thing in the world for you"},
	{ author: "Unknown", text : "Even the greatest was once a beginner. Don't be afraid to take tahta first step."},
	{ author:"Neale Donald Walsch", text: "You are afraid to die, and you're afraid to live. What a way to exist."}
];


app.get("/allquotes", function(req, res){
	res.json(quotes);
});

app.get("/quote/random", function(req, res){
	var id = Math.floor(Math.random() * quotes.length);
	var q = quotes[id];
	res.json(q);
});

app.get("/quote/:id", function(req, res){
	if(quotes.length <= req.params.id || req.params.id < 0) {
		res.statusCode = 404;
		return res.send("Error 404: No quote found");
	}

	var q = quotes[req.params.id];
	res.json(q);
});


/*app.delete("/quote/:id", function(req, res){
	if(quotes.length<=req.params.id){
		res.statusCode = 404;
		return res.send("Error 404: No quote found");
	}

	quotes.splice(req.params.id, 1);
	res.json(true);
}); */



app.listen(process.env.PORT || 3002);


