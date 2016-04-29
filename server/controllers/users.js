var mongoose = require('mongoose');
var User = mongoose.model('User');
var passport = require('passport');

module.exports = (function() {
 return {


		create: function(req, res, next){
			console.log(req.body)
			if(!req.body.username || !req.body.password || !req.body.email){
				var message = "Please complete all fields"
				return res.json(message)
			}

			if(req.body.password !== req.body.password2){
				var message = "Passwords do not match"
				return res.json(message)
			}

			var user = new User();

			user.username = req.body.username;

			user.email = req.body.email;

			user.setPassword(req.body.password)

			user.save(function(err){
				//console.log(user.username)
				if(err){ 
					console.log("something went wrong"); 
					var message = "User already exists"
					return res.json(message)
				}
				console.log("successfully added a user")
				return res.json({token: user.generateJWT()})
			});
		},
		show: function(req, res, next){
			console.log("in show method")
			console.log(req.body)
			if(!req.body.username || !req.body.password){
				console.log("both fields not filled out")
				var message = "Please complete both fields"
				return res.json(message);
			}

			passport.authenticate('local', function(err, user, info){
				console.log("in passport authenticate")
				if(err){ 
					console.log(err)
					console.log("in err for passport authenticate")
					return next(err); 
				}

				if(user){
					console.log("found user")
					return res.json({token: user.generateJWT()});
				} 
				else {
					console.log("hello from else")
					console.log(info)
					var message = "Incorrect username/password"
					return res.json(message);
				}
			})(req, res, next);
		},



 
	}	
})(); 