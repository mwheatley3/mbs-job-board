var User = require('../db.js').user;

module.exports = {
	login: function(req, res, next){
		var username = req.body.username;
		var attemptedPassword = req.body.password;
		User.findOne({username: username})
		.then(function(user){
			if(!user){
				res.send({error:'user does not exist'});
			}
			else{
				if(user.password === attemptedPassword){
					res.send({username: username});
				}
				else{
					res.send({error: 'incorrect password'});
				}
			}
		})
	}
}