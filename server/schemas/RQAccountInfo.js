var mongoose = require('mongoose');
var commonPlugin = require('../schemaPlugins/common.js');

exports.RQAccountInfo = new mongoose.Schema({ 
		_id: { type: String }
		,username: { type: String }
		,hasGithubToken: { type: Boolean }
});

exports.RQAccountInfo.plugin(commonPlugin);
