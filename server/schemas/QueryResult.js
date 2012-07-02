var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.QueryResult = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date, default: new Date(0) }
		,modified: { type: Date, default: new Date(0) }
		,deleted: { type: Boolean }
		,version: { type: Number }
});

exports.QueryResult.plugin(commonPlugin);
