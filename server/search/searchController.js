var request = require('request');
var parseString = require('xml2js').parseString;
var util = require('util');
var Report = require('../db.js').report;

module.exports = {
	searchForJobs: function(req, res, next){
		var agent = req.useragent.browser + "%2" + req.useragent.version;
	  var ip = req.ip; //need to parse IP address
	  var job = req.body.job || 'plumber';//replace spaces with '+'
	  var zip = req.body.zip || 78702;

	  Report({
	  	zip_code: zip, 
	  	search_term: job, 
	  	date_time: new Date(), 
	  	ip_address: ip
	  }).save();
	  
	  var queryString = "http://api.indeed.com/ads/apisearch?";
	  var publisherString = "&publisher=2878037053725137";
	  var jobString = "&q=" + job;
	  var zipString = "&l=" + zip;
	  var limitString = "&limit=20";
	  var chnl = "&chnl=FJR";
	  var agentString = "&useragent=" + agent;
	  var userip = "&userip=" + ip;
	  var version = "&v=2"
	  var indeedQuery = queryString + publisherString + jobString + zipString + limitString + chnl + agentString + userip + version;

	  request(indeedQuery,function (error, response, body) {
	    if(error){
	      console.log(error);
	    }
	    parseString(body, function(err, results){
	    	// console.log('parsedXML', util.inspect(results.response.results[0].result));
	    	res.send({jobs: results.response.results[0].result});
	    })
	  })
	}
}