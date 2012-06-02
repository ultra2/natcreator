var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ROFile = new mongoose.Schema({ 
		_id: { type: String }
		,content: { type: String }
		,name: { type: String }
});

exports.ROFile.plugin(commonPlugin);
