var mongoose = require('mongoose');
//update to use mLabs database
var connectString = 'mongodb://mbs:mbs@ds021969.mlab.com:21969/job_board'
mongoose.connect(connectString);
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

var HTMLSchema = new mongoose.Schema({
  HTML: String,
  created_at: Date
});

module.exports.db = db;

module.exports.user = mongoose.model('users', UserSchema);

module.exports.report = mongoose.model('reports', ReportSchema);

module.exports.HTML = mongoose.model('htmls', HTMLSchema);