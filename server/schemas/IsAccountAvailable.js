var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.IsAccountAvailable = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
});

exports.IsAccountAvailable.plugin(commonPlugin);
