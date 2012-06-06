var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RGActivate = new mongoose.Schema({ 
		_id: { type: String }
		,key: { type: String }
});

exports.RGActivate.plugin(commonPlugin);
