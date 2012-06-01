var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQIsAccountAvailable = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
});

exports.RQIsAccountAvailable.plugin(commonPlugin);
