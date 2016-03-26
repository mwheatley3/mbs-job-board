var express = require('express');
var mongo = require('./db.js');
var app = express();
var port = process.env.PORT || 4000;

// configure our server with all the middleware and routing
require('./middleware.js')(app, express);

// Start the server!
app.listen(port);
console.log("Listening on port", port);


/* Sample Request
 Sample format of an xml request:
 http://api.indeed.com/ads/apisearch?publisher=3174301997799144&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2
 */
