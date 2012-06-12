var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.PMAccountProjectRole = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,created: { type: Date }
		,modified: { type: Date }
		,version: { type: Number }
		,deleted: { type: Boolean }
		,name: { type: String }
});

exports.PMAccountProjectRole.plugin(commonPlugin);
