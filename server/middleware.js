var bodyParser = require('body-parser');
var useragent = require('express-useragent');
var Path = require('path');
var request = require('request');

module.exports = function(app, express){

	var searchRouter = express.Router();
	var adminRouter = express.Router();
	var reportRouter = express.Router();

	var assetFolder = Path.resolve(__dirname, '../client/');
	app.use( express.static(assetFolder) );
	app.use( bodyParser.json() );
	app.use( useragent.express() );

	app.use('/api/indeed', searchRouter); // use user router for all user request
	app.use('/api/admin', adminRouter);
	app.use('/api/report', reportRouter);

   // inject our routers into their respective route files
  require('./search/searchRouter.js')(searchRouter);
  require('./admin/adminRouter.js')(adminRouter);
  require('./report/reportRouter.js')(reportRouter);

}
