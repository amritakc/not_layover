var mongoose = require('mongoose');
var Place = mongoose.model('Place');

var Googleplaces = require('googleplaces');
var config = require('../../config_googleplaces.js')
var P = new Googleplaces(config)

module.exports = (function() {
 return {
   findPlace: function(req, res){
   	console.log("hello")
   		}
	}	
})(); 