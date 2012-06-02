var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQIsAuthenticated = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RQIsAuthenticated.plugin(commonPlugin);
