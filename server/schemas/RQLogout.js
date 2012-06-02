var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQLogout = new mongoose.Schema({ 
		_id: { type: String }
});

exports.RQLogout.plugin(commonPlugin);
