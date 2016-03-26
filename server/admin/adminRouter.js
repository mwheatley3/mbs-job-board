var adminController = require('./adminController.js')

module.exports = function (app) {
  app.post('/login', adminController.login);
  app.post('/tracking', adminController.postTracking);
  app.get('/tracking', adminController.getTracking);
};