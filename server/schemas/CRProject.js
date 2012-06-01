var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');
var CRConnection = require('../schemas/CRConnection.js').CRConnection;

exports.CRProject = new mongoose.Schema({ 
		_id: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,connections: [CRConnection]
		,name: { type: String }
});

exports.CRProject.plugin(commonPlugin);
