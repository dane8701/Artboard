var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({
	'firstname': String,
	'lastname': String,
	'email' : String,
	'password' : String,
	'birthday': Date,
	'gender': String,
});

module.exports = mongoose.model('users', usersSchema);
