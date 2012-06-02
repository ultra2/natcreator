var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQTestConnection = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,password: { type: String }
		,server: { type: String }
		,database: { type: String }
		,port: { type: Number }
});

exports.RQTestConnection.plugin(commonPlugin);
