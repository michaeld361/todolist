var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ListitemsSchema   = new Schema({
	todolist: String
});

module.exports = mongoose.model('listitems', ListitemsSchema);