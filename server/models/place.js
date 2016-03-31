var mongoose = require('mongoose');
var Schema = mongoose.Schema

var PlaceSchema = new mongoose.Schema({
  text: String, 
  created_at: {type: Date, default: new Date}
});

mongoose.model('Place', PlaceSchema);