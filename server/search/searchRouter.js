var searchController = require('./searchController.js')

module.exports = function (app) {
  app.post('/search', searchController.searchForJobs);
};