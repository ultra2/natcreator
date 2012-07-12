var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RequestGet = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RequestGet.plugin(commonPlugin);
