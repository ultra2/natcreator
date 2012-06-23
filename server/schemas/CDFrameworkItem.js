var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.CDFrameworkItem = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
		,displayName: { type: String }
});

exports.CDFrameworkItem.plugin(commonPlugin);
