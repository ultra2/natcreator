var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var PMConnection = require('../schemas/PMConnection.js').PMConnection;

exports.PMProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,connections: [PMConnection]
		,name: { type: String }
});

exports.PMProject.plugin(commonPlugin);
