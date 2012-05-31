var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.File = new mongoose.Schema({ 
		_id: { type: String }
		,content: { type: String }
		,name: { type: String }
});

exports.File.plugin(commonPlugin);
