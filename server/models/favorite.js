var mongoose = require('mongoose');
var Schema = mongoose.Schema

var FavoriteSchema = new mongoose.Schema({
  name: String, 
  city: String,
  likes: {type: Number, default: 0}
});

mongoose.model('Favorite', FavoriteSchema);