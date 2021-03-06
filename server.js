var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport') 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
require('./passport/passport.js');

app.use(express.static(path.join(__dirname, './client')));
app.use(passport.initialize());

app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});