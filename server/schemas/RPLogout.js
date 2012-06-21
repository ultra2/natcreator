var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPLogout = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPLogout.plugin(commonPlugin);
