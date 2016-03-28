var Report = require('../db.js').report;

module.exports = {
	getAll: function(req, res, next){
		Report.find().sort('-date_time')
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			console.log('error', error);
		})
	}
}