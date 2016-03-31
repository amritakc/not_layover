var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');
var Place = mongoose.model('Place');

var Twit = require('twit');
var config = require('../../config_twitter.js')
var T = new Twit(config)

var Googleplaces = require('googleplaces');
var config = require('../../config_googleplaces.js')
// var P = new Googleplaces(config)


module.exports = (function() {
 return {
   getTweet: function(req, res) {
   		// var params = {
   		// 	q: '%23layover AND %23london',
   		// 	count: 50
   		// }
   		// T.get('search/tweets', params, gotData)
   		// function gotData(err, data, respone){
   		// 	res.json(data)
   		// }
     //     console.log("in getTweet in backend controller")
         var assert = require("assert")
         var NearBySearch = require('googleplaces/lib/NearBySearch');
         var nearBySearch = new NearBySearch(config.api_key, config.outputFormat);
         // console.log(nearBySearch())
         // console.log(config)
         var parameters = {
            location: [40.7127, -74.0059],
            keyword: "doctor",
            radius: 500

         };

         nearBySearch(parameters, function(error, response) {
            // console.log(error)
            // console.log(response)
            x = response
            var params = {
            q: '%23layover AND %23london',
            count: 50
         }
         T.get('search/tweets', params, gotData)
         function gotData(err, data, respone){
            // console.log(x)
            var y = {}
            y["twitter"] = data
            y["google"]= x
            // console.log(y)
            res.json(y)
         }
         console.log("in getTweet in backend controller")
            
         });
      


  	  },
	}	
})(); 