var reportController = require('./reportController.js')

module.exports = function (app) {
  app.get('/all', reportController.getAll);
};
