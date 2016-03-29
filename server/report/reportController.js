var Report = require('../db.js').report;

module.exports = {
	getAll: function(req, res, next){
		Report.find()
		.sort('-date_time')//only get the latest records
		.limit(25)//limit to 25 records
		.then(function(data){
			res.send(data);
		})
		.catch(function(error){
			res.send(error);
		})
	}
}