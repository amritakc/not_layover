var tweets = require('./../controllers/tweets.js')
var places = require('./../controllers/places.js')

module.exports = function(app){
	app.get('/tweets', function(req,res){
		tweets.getTweet(req,res)
	})
	app.get('/places', function(req,res){
		places.findPlace(req,res)
	})
};