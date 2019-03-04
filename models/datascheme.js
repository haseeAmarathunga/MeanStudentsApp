var mongoose = require('mongoose');

var StudentSchema = mongoose.Schema({
    name: {type:String},
    age: {type:String}
});

module.exports = mongoose.model('student',StudentSchema);
