var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGAuthGoogle = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RGAuthGoogle.plugin(commonPlugin);
