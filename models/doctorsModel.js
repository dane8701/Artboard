var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorsSchema = new Schema({
    'username': String,
    'password': String,
    'specialty': String,
});

module.exports = mongoose.model('doctors', doctorsSchema);
