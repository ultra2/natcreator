var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAccountAvailable = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,username: { type: String }
});

exports.RPIsAccountAvailable.plugin(commonPlugin);
