var tweets = require('./../controllers/tweets.js')

module.exports = function(app){
	app.get('/tweets', function(req,res){
		tweets.getTweet(req,res)
	})
};