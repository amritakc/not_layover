var mongoose = require('mongoose');
var Schema = mongoose.Schema

var YelpSchema = new mongoose.Schema({
  text: String, 
  created_at: {type: Date, default: new Date}
});

mongoose.model('Yelp', YelpSchema);