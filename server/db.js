var mongoose = require('mongoose');
//update to use mLabs database
// var connectString = 'mongodb://<dbuser>:<dbpassword>@ds021969.mlab.com:21969/job_board'
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.once('open', function(){
    console.log("Mongo connection was succesful");
});

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

var ReportSchema = new mongoose.Schema({
  zip_code: Number,
  search_term: String,
  date_time: Date,
  ip_address: String
});

module.exports.db = db;

module.exports.user = mongoose.model('users', UserSchema);

module.exports.report = mongoose.model('reports', ReportSchema);