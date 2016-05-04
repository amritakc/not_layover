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
      // console.log(req.body.place)
      // var lat;
      // var lon;
      // var c;
      geocoder.geocode(req.body.place, function ( err, data ) {
  // do something with data
         console.log(data.results[0].geometry.location.lat)
         lat = data.results[0].geometry.location.lat
         lon = data.results[0].geometry.location.lng
         c = data.results[0].address_components[0].short_name
         console.log(lon)
         console.log("in geocoder")
         // console.log(c)
         // console.log(data)
         
         // console.log("outside of geocoder function")
         // console.log(lon)
         // console.log(c)
         // var city = '%23'+c+' AND %23layover'
         var city = "%23layover"
         // console.log(city, "city")
         // if(req.body.place =="JFK (New York City, USA)"){
         //    var lat = 40.7484;
         //    var lon = -73.9857;
         //    var city = '%23NYC AND %23layover'
         // }
         // if(req.body.place =="LHR (London, England)"){
         //    var lat = 51.5033;
         //    var lon = -0.1195;
         //    var city = '%23london AND %23layover'
         // }
         // if(req.body.place =="DBX (Dubai, UAE)"){
         //    var lat = 25.1972;
         //    var lon = 55.2744;
         //    var city = '%23dubai AND %23layover'
         // }
         // if(req.body.place =="HND (Tokyo, Japan)"){
         //    var lat = 35.6895;
         //    var lon = 139.6917;
         //    var city = '%23tokyo AND %23layover'
         // }
   		var params = {
   			q: city,
   			count: 50
   		}
   		// T.get('search/tweets', params, gotData)
   		// function gotData(err, data, respone){
   		// 	res.json(data)
   		// }
     //     console.log("in getTweet in backend controller")





         var assert = require("assert")
         var NearBySearch = require('googleplaces/lib/NearBySearch');
         var nearBySearch = new NearBySearch(config_googleplaces.api_key, config_googleplaces.outputFormat);
         // console.log(nearBySearch())
         // console.log(config)
         var parameters = {
            location: [lat, lon],
            type: "tourism",
            radius: 500
         };
         console.log(parameters)
         nearBySearch(parameters, function(error, response) {
            // console.log(error)
            // console.log(response)
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
         // console.log("in getTweet in backend controller")
            
         });
      

      });
  	  },
	}	
})(); 