var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.ClientWeb = new mongoose.Schema({ 
		_id: { type: String }
});

exports.ClientWeb.plugin(commonPlugin);
