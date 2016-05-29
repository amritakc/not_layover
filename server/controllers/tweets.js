var mongoose = require('mongoose');
var Tweet = mongoose.model('Tweet');
var Place = mongoose.model('Place');

var Twit = require('twit');
var config_twitter = require('../../config_twitter.js')
var T = new Twit(config_twitter)


var Googleplaces = require('googleplaces');
var config_googleplaces = require('../../config_googleplaces.js')
// var P = new Googleplaces(config)


var geocoder = require('geocoder');
var config_geocoder = require('../../config_geocode.js')


module.exports = (function() {
 return {
   getTweet: function(req, res) {
      geocoder.geocode(req.body.place, function ( err, data ) {
         console.log(data.results[0].geometry.location.lat)
         lat = data.results[0].geometry.location.lat
         lon = data.results[0].geometry.location.lng
         c = data.results[0].address_components[0].short_name
         console.log(lon)
         console.log("in geocoder")
         var city = "%23"+c+" AND %23layover"
         console.log(city, "city")
   		var params = {
   			q: city,
   			count: 50
   		}
         var assert = require("assert")
         var NearBySearch = require('googleplaces/lib/NearBySearch');
         var nearBySearch = new NearBySearch(config_googleplaces.api_key, config_googleplaces.outputFormat);
         var parameters = {
            location: [lat, lon],
            type: "tourism",
            radius: 500
         };
         console.log(parameters)
         nearBySearch(parameters, function(error, response) {
            x = response
            var params = {
            q: city,
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
         });
      

      });
  	  },
	}	
})(); 