var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.IsAuthenticated = new mongoose.Schema({ 
		_id: { type: String }
});

exports.IsAuthenticated.plugin(commonPlugin);
