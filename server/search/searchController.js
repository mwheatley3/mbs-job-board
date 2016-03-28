var parseString = require('xml2js').parseString;
var util = require('util');
var Report = require('../db.js').report;
var request = require('request');

module.exports = {
	searchForJobs: function(req, res, next){
		var agent = req.useragent.browser + "%2" + req.useragent.version;//not 100% sure what pieces of the useragent are needed for the Indeed API
	  var ip = req.ip;
	  //convert IPv6 to IPv4
	  if(ip.substr(0,7) === '::ffff:'){
	  	ip = ip.substr(7);
	  }
	  var job = req.body.job;
	  job = job.split(' ').join('+');//By default terms are ANDed
	  var zip = req.body.zip;
	  //save the search terms into the report
	  Report({
	  	zip_code: zip, 
	  	search_term: job, 
	  	date_time: new Date(), 
	  	ip_address: ip
	  }).save();
	  //build up query string for Indeed API call
	  var queryString = "http://api.indeed.com/ads/apisearch?";
	  var publisherString = "publisher=" + process.env.PUBLISHER;
	  var jobString = "&q=" + job;
	  var zipString = "&l=" + zip;
	  var limitString = "&limit=20";//maximum 20 per page
	  var chnl = "&chnl=" + process.env.chnl;
	  var agentString = "&useragent=" + agent;
	  var userip = "&userip=" + ip;
	  var version = "&v=2"
	  var indeedQuery = queryString + publisherString + jobString + zipString + limitString + chnl + agentString + userip + version;
	  console.log('indeedQuery', indeedQuery);
	  //send request to the Indeed API
	  request(indeedQuery,function (error, response, body) {
	    if(error){
	      res.send(error);
	    }
	    parseString(body, function(err, results){
	    	res.send({jobs: results.response.results[0].result});
	    })
	  })
	}
}