var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var consultationsSchema = new Schema({
    'namePatient': String,
    'surnamePatient': String,
    'birthday': Date,
    'gender': String,
    'profession': String,
    'residence': String,
    'age': Number,
    'weight': Number,

});

module.exports = mongoose.model('consultations', consultationsSchema);
