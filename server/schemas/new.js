var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.new = new mongoose.Schema({ 
		_id: { type: String }
		,a: { type: String }
		,b: { type: Boolean }
});

exports.DataProperty.plugin(commonPlugin);
