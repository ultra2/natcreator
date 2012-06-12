var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ClientDesigner = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.ClientDesigner.plugin(commonPlugin);
