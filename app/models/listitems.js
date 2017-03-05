var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ListitemsSchema   = new Schema({
	name: String
});

module.exports = mongoose.model(':list_id', ListitemsSchema);