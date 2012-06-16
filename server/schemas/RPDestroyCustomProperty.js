var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPDestroyCustomProperty = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,name: { type: String }
});

exports.RPDestroyCustomProperty.plugin(commonPlugin);
