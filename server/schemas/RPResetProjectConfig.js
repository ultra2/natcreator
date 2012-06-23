var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPResetProjectConfig = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPResetProjectConfig.plugin(commonPlugin);
