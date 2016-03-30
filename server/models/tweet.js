var mongoose = require('mongoose');
var Schema = mongoose.Schema

var TweetSchema = new mongoose.Schema({
  text: String, 
  user_name: String,
  created_at: {type: Date, default: new Date}
});

mongoose.model('Tweet', TweetSchema);