var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
var PMConnection = require('../schemas/PMConnection.js').PMConnection;

exports.PMProject = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,connections: [PMConnection]
		,name: { type: String }
});
