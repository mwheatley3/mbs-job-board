var express = require('express');
var Path = require('path');
var routes = express.Router();

var assetFolder = Path.resolve(__dirname, '../client/');
routes.use(express.static(assetFolder));

//
// The Catch-all Route
// This is for supporting browser history pushstate.
// NOTE: Make sure this route is always LAST.
//
routes.get('/*', function(req, res){
  res.sendFile( assetFolder + '/index.html' )
})

var app = express();

// Parse incoming request bodies as JSON
app.use( require('body-parser').json() );

// Mount our main router
app.use('/', routes);

// Start the server!
var port = process.env.PORT || 4000;
app.listen(port);
console.log("Listening on port", port);
