var tweets = require('./../controllers/tweets.js')
var places = require('./../controllers/places.js')
var users = require('./../controllers/users.js')

module.exports = function(app){
	app.post('/tweets', function(req,res){
		tweets.getTweet(req,res)
	})
	app.get('/places', function(req,res){
		places.findPlace(req,res)
	})
	app.post('/register', function(req, res, next){
		users.create(req,res, next)
	})
	app.post('/login', function(req, res, next){
		users.show(req,res, next)
	})
};