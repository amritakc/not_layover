var tweets = require('./../controllers/tweets.js')
var places = require('./../controllers/places.js')

module.exports = function(app){
	app.post('/tweets', function(req,res){
		tweets.getTweet(req,res)
	})
	app.get('/places', function(req,res){
		places.findPlace(req,res)
	})
	app.post('/register', function(req, res, next){
		user.create(req,res, next)
	})
	app.post('/login', function(req, res, next){
	user.show(req,res, next)
	})
};