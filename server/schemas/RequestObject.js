var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RequestObject = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RequestObject.plugin(commonPlugin);
