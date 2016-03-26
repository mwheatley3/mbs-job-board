var Report = require('../db.js').report;

module.exports = {
	getAll: function(req, res, next){
		Report.find()
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			console.log('error', error);
		})
	}
}