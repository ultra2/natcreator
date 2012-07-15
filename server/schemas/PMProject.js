var mongoose = require('mongoose')
   ,Schema = mongoose.Schema
   ,commonPlugin = require('../schemaPlugins/common.js');
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
exports.CRBaseObject.plugin(commonPlugin);
