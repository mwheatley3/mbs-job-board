var adminLoginController = require('./adminLoginController.js')

module.exports = function (app) {
  app.post('/login', adminLoginController.login);
};