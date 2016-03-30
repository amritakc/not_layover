var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');

var Twit = require('twit');
var config = require('../../config_twitter.js')
var T = new Twit(config)

module.exports = (function() {
 return {
   getTweet: function(req, res){
   		var params = {
   			q: '%23layover AND %23london',
   			count: 10
   		}
   		T.get('search/tweets', params, gotData)
   		function gotData(err, data, respone){
   			console.log(data)
   		}
  	  },
	}	
})(); 