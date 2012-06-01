var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.Logout = new mongoose.Schema({ 
		_id: { type: String }
});

exports.Logout.plugin(commonPlugin);
