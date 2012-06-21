var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RPIsAuthenticated = new mongoose.Schema({ 
		_id: { type: String }
		,_type: { type: String }
});

exports.RPIsAuthenticated.plugin(commonPlugin);
