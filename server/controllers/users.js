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
		}


 
	}	
})(); 