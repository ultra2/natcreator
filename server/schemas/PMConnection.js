var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMConnection = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,username: { type: String }
		,password: { type: String }
		,database: { type: String }
		,server: { type: String }
		,port: { type: Number }
});

exports.PMConnection.plugin(commonPlugin);
