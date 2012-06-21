var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPTestConnection = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
		,password: { type: String }
		,server: { type: String }
		,database: { type: String }
		,port: { type: Number }
});

exports.RPTestConnection.plugin(commonPlugin);
