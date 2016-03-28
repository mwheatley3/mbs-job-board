var User = require('../db.js').user;
var HTML = require('../db.js').HTML;

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
	},
	postTracking: function(req, res, next){
		var trackingHTML = req.body.trackingHTML;

		HTML({
			HTML:trackingHTML,
			created_at: new Date()
		})
		.save()
		.then(function(data){
			res.sendStatus(200);
		})
		.catch(function(data){
			res.sendStatus(401);//look up correct error code
		})
	},
	getTracking: function(req, res, next){
		HTML.findOne().sort('-created_at')
		.then(function(data){
			res.send(data);
		})
	}
}